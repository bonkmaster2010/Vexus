import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import { getAmazonCategory } from './src/utils/extras/amazon_scraper.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dataPath = join(__dirname, 'csvjson.json'); 
const outputPath = join(__dirname, 'DataWithCategories.json');

const rawData = fs.readFileSync(dataPath, 'utf-8');
const products = JSON.parse(rawData);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

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

async function scrapeAllCategories(batchSize = 100) {
    let results = [];

    if (fs.existsSync(outputPath)) {
        results = JSON.parse(fs.readFileSync(outputPath, 'utf-8'));
        console.log(`Resuming from ${results.length} products...`);
    }

    for (let i = results.length; i < products.length; i++) {
        const product = products[i];
        console.log(`Scraping product ${i + 1}/${products.length}: ${product.name}`);

        const category = await safeGetCategory(product.link);
        results.push({ ...product, real_category: category });

        await sleep(Math.floor(Math.random() * 3000) + 2000);

        if ((i + 1) % batchSize === 0) {
            fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
            console.log(`Saved progress after ${i + 1} products...`);
        }
    }

    fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
    console.log(`Scraping complete! Saved to ${outputPath}`);
}

scrapeAllCategories(100).catch(err => console.error('Scraper failed:', err));
