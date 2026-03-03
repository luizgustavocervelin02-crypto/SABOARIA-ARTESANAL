import * as cheerio from 'cheerio';
import fs from 'fs';

const html = fs.readFileSync('rendered_page.html', 'utf8');
const $ = cheerio.load(html);

// Extract the Hero section
const hero = $('body').html();

fs.writeFileSync('extracted.txt', hero);
console.log('Extracted DOM');
