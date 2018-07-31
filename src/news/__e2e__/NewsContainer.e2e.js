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

  test(
    'clicking a headline launches the article in a new browser tab',
    async () => {
      await page.waitForSelector('.news-headlines-container');
      const items = await page.$$('.news-headlines-container a');
      const itemHref = await page.evaluate(() => document.querySelector('.news-headlines-container a').href);

      await items[0].tap();
      await page.waitFor(4000); // allow some time for the new page to have launched
      const pages = await browser.pages();

      expect(pages.length).toBe(3); // chromium welcome page, news page, the launched headline page
      expect(pages[2].url()).toContain(itemHref); // used toContain because may have redirected (this might still fail!)
    },
    10000
  );

  test('shows error message on fetch failure', async () => {
    await page.setRequestInterception(true);
    page.on('request', interceptedRequest => {
      if (interceptedRequest.url().includes('apiKey')) {
        interceptedRequest.abort();
      } else {
        interceptedRequest.continue();
      }
    });

    await page.goto('http://localhost:3000/news');

    const errorMessage = await page.$eval('.errorMessage', e => e.innerHTML);
    expect(errorMessage).toContain('Failed to get top headlines due to');
  });
});
