import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { getAmazonCategory } from './src/utils/extras/amazon_scraper.js';

// Resolve file paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dataPath = join(__dirname, 'public', 'data', 'csvjson.json');
const outputPath = join(__dirname, 'public', 'data', 'DataWithCategories.json');

// Load products
const rawData = fs.readFileSync(dataPath, 'utf-8');
const products = JSON.parse(rawData);

// Helper to pause
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Retry wrapper for category scraping
async function safeGetCategory(link, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const category = await getAmazonCategory(link);
      if (category) return category;
    } catch (err) {
      console.warn(`Attempt ${attempt} failed for ${link}: ${err.message}`);
    }
    await sleep(3000);
  }
  return null;
}

// Main scraper
async function scrapeAllCategories(batchSize = 100) {
  let results = [];

  if (fs.existsSync(outputPath)) {
    try {
      const previousData = fs.readFileSync(outputPath, 'utf-8');
      results = JSON.parse(previousData);
      console.log(`Resuming from ${results.length} products...`);
    } catch (err) {
      console.error('Error reading previous progress file, starting fresh.', err.message);
    }
  }

  // Main category keywords
  const mainCategoryKeys = ["laptop", "pc", "monitor"];

  const productsToScrape = products.filter(product => {
    const nameLower = product.name.toLowerCase();
    return mainCategoryKeys.some(key => nameLower.includes(key));
  });

  console.log(`Found ${productsToScrape.length} products matching main categories.`);

  const alreadyScraped = new Set(results.map(p => p.name));

  for (let i = 0; i < productsToScrape.length; i++) {
    const product = productsToScrape[i];

    if (alreadyScraped.has(product.name)) continue;

    console.log(`Scraping product ${i + 1}/${productsToScrape.length}: ${product.name}`);

    const category = await safeGetCategory(product.link);
    if(results.length % batchSize === 0){
    results.push({ ...product, real_category: category });
    }
    await sleep(Math.floor(Math.random() * 3000) + 2000);

      fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
      console.log(`Saved progress after ${results.length} products...`);
    
  }

  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`Scraping complete! Saved to ${outputPath}`);
}

scrapeAllCategories(100).catch(err => console.error('Scraper failed:', err));
