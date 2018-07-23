const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone 5'];
const iPad = devices['iPad landscape'];
import { getConfig } from '../App';

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
let logs = [];
let errors = [];

describe('App - iPad', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch(isDebugging());
    page = await browser.newPage();
    page.emulate(iPad);
    await page.goto('http://localhost:3000/');
    /**page.emulate({
      viewport: {
        width: 1024,
        height: 672
      },
      userAgent: ''
      });*/
  });

  afterAll(() => {
    if (isDebugging()) {
      browser.close();
    }
  });

  test('loads', async () => {
    const html = await page.$eval('.app-wrapper', e => e.innerHTML);
    expect(html).not.toBeNull();
  });

  test('main page items load correctly', async () => {
    const appPageContainer = await page.$eval('.app-page-container', el => (el ? true : false));
    const items = await page.$$('.app-page-container a');

    expect(appPageContainer).toBe(true);
    expect(items.length).toBe(6);
  });

  test('side menu items load correctly', async () => {
    const sideMenuEls = await page.$$('.side-menu');
    const items = await page.$$('.side-menu a');

    expect(sideMenuEls.length).toBe(1);
    expect(items.length).toBe(getConfig().length);
  });
});

describe('App - iPhone', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch(isDebugging());
    page = await browser.newPage();
    page.emulate(iPhone);
    await page.goto('http://localhost:3000/');
  });

  afterAll(() => {
    if (isDebugging()) {
      browser.close();
    }
  });

  test('side menu is not rendered on smaller screen sizes', async () => {
    const sideMenuEls = await page.$$('.side-menu');

    expect(sideMenuEls.length).toBe(0);
  });
});
