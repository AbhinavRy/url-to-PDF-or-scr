const puppeteer = require('puppeteer');

const url = 'https://sitename.com';

async function getPic() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url,{
    waitUntil: 'networkidle2'
  });
  await page.screenshot({path: 'output.png', fullPage: true});
  await browser.close();
}

getPic();