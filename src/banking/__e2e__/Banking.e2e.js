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

const patchGeolocation = async () => {
  await page.evaluateOnNewDocument(function() {
    navigator.geolocation.getCurrentPosition = function(cb) {
      setTimeout(() => {
        cb({
          coords: {
            accuracy: 21,
            altitude: null,
            altitudeAccuracy: null,
            heading: null,
            latitude: 23.129163,
            longitude: 113.264435,
            speed: null
          }
        });
      }, 1000);
    };
  });
};

describe('Banking', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch(isDebugging());
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await patchGeolocation();
    await page.goto('http://localhost:3000/banking');
  });

  afterEach(async function() {
    await page.close();
  });

  test('renders list of banks', async () => {
    const items = await page.$$('.banks-container a');

    expect(items.length).toBeGreaterThan(0);
  });

  test('renders list of nearest atms', async () => {
    const items = await page.$$('.banks-container a');

    const navigationPromise = page.waitForNavigation();
    await items[1].tap();
    await navigationPromise; // The navigationPromise resolves after navigation has finished

    await page.waitForSelector('.atms-container');
    const atmItems = await page.$$('.atms-container a');
    expect(atmItems.length).toBeGreaterThan(0);

    const errorMessage = await page.$$('.errorMessage');
    expect(errorMessage.length).toBe(0);
  });

  test('shows error message on atms fetch failure', async () => {
    await page.setRequestInterception(true);
    page.on('request', interceptedRequest => {
      if (interceptedRequest.url().includes('api')) {
        interceptedRequest.abort();
      } else {
        interceptedRequest.continue();
      }
    });

    const items = await page.$$('.banks-container a');

    const navigationPromise = page.waitForNavigation();
    await items[1].tap(); // use 1 as I know it doesnt fail
    await navigationPromise; // The navigationPromise resolves after navigation has finished

    const errorMessage = await page.$eval('.errorMessage', e => e.innerHTML);
    expect(errorMessage).toContain('Failed to find nearest');
  });
});
