import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://saboariaartesanal.netlify.app/', { waitUntil: 'networkidle0' });
    const html = await page.content();
    fs.writeFileSync('rendered_page.html', html);
    await browser.close();
    console.log('Successfully saved rendered HTML');
})();
