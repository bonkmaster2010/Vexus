import puppeteer from 'puppeteer';
export async function getAmazonCategory(url) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    const category = await page.evaluate(() => {
        const breadcrumbDiv = document.querySelector('#wayfinding-breadcrumbs_feature_div');
        if (!breadcrumbDiv)
            return null;
        return breadcrumbDiv.textContent?.trim().replace(/\s+/g, ' ');
    });
    await browser.close();
    return category;
}
