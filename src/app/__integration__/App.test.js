import puppeteer from 'puppeteer';
import devices from 'puppeteer/DeviceDescriptors';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { getConfig } from '../App';

const iPhone = devices['iPhone 5'];
const iPad = devices['iPad landscape'];

const isDebugging = () => {
  const debugging_mode = {
    headless: false,
    slowMo: 250,
    devtools: true
  };
  return process.env.NODE_ENV === 'debug' ? debugging_mode : {};
};

// jest-image-snapshot custom configuration in order to save screenshots and compare the with the baseline
const getJestImageSnapshotConfig = filename => {
  return {
    failureThreshold: '0.01',
    failureThresholdType: 'percent',
    customSnapshotsDir: `${__dirname}/snapshots/`,
    customSnapshotIdentifier: filename,
    noColors: true
  };
};

let browser;
let page;

describe('App - iPad', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch(isDebugging());
  });

  afterAll(() => {
    if (isDebugging()) {
      browser.close();
    }
  });

  beforeEach(async () => {
    page = await browser.newPage();
    page.emulate(iPad);
    await page.goto('http://localhost:3000/');
  });

  afterEach(async function() {
    await page.close();
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

  test('screenshot matches', async () => {
    expect.extend({ toMatchImageSnapshot });

    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot(getJestImageSnapshotConfig('App-iPad'));
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

  test('screenshot matches', async () => {
    expect.extend({ toMatchImageSnapshot });

    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot(getJestImageSnapshotConfig('App-iPhone'));
  });
});
