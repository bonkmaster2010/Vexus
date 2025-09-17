import puppeteer from 'puppeteer';

// scrapes amazon to get the product category
export async function getAmazonCategory(url) {
    const browser = await puppeteer.launch({ headless: true });
    try {
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'domcontentloaded' });

        const category = await page.evaluate(() => {
            const breadcrumbDiv = document.querySelector('#wayfinding-breadcrumbs_feature_div');
            if (!breadcrumbDiv) return null;

            return Array.from(breadcrumbDiv.querySelectorAll('li'))
                        .map(li => li.textContent?.trim())
                        .filter(Boolean)
                        .join(' > ');
        });

        return category;
    } catch (error) {
        console.error('Error fetching category:', error);
        return null;
    } finally {
        await browser.close();
    }
}
