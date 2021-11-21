const puppeteer = require('puppeteer');

const url = 'https://sitename.com';

async function getPdf() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url,{
    waitUntil: 'networkidle2'
  });
  await page.pdf({
    path: 'outputFileName.pdf',
    displayHeaderFooter: true,
    headerTemplate: '',
    footerTemplate: '',
    printBackground: true,
    format: 'A4',
  });
  await browser.close();
}

getPdf();