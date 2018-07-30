import puppeteer from 'puppeteer';

const isDebugging = () => {
  const debugging_mode = {
    headless: false,
    slowMo: 250,
    devtools: true
  };
  return process.env.NODE_ENV === 'debug' ? debugging_mode : {};
};

let browser;
let page;

describe('News', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch(isDebugging());
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:3000/news');
  });

  afterEach(async function() {
    await page.close();
  });

  test('renders list of headlines', async () => {
    await page.waitForSelector('.news-headlines-container');
    const items = await page.$$('.news-headlines-container a');
    expect(items.length).toBeGreaterThan(0);
  });

  /**test('clicking a headline launches the article in a new browser tab', async () => {
    await page.waitForSelector('.news-headlines-container');
    const items = await page.$$('.news-headlines-container a');

    browser.on('targetchanged', () => {
      console.log("tpp")
    });

    const navigationPromise = page.waitForNavigation();
    await items[1].tap();
    await navigationPromise; // The navigationPromise resolves after navigation has finished

    expect(items.length).toBeGreaterThan(0);

    //await page.waitForSelector('.atms-container');

  });*/
});
