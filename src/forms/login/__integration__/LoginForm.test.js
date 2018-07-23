const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPad = devices['iPad landscape'];

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

describe('LoginForm - iPad', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch(isDebugging());
    page = await browser.newPage();
    page.emulate(iPad);
    await page.goto('http://localhost:3000/forms/login');
  });

  afterAll(() => {
    if (isDebugging()) {
      browser.close();
    }
  });

  test('login form works correctly', async () => {
    const userNameEl = await page.$('[name="username"]');
    const passwordEl = await page.$('[name="password"]');
    const confirmPasswordEl = await page.$('[name="confirm-password"]');
    const submitEl = await page.$('[type="submit"]');

    await userNameEl.tap();

    // holding down Shift in order to select and delete some text:
    await page.keyboard.down('Shift');
    for (let i = 0; i < 'lmeikle'.length; i++) await page.keyboard.press('ArrowLeft');
    await page.keyboard.up('Shift');
    await page.keyboard.press('Backspace');

    await page.type('[name="username"]', 'lmeikle');

    await passwordEl.tap();
    await page.type('[name="password"]', '');
    await page.type('[name="password"]', 'whatever');

    await confirmPasswordEl.tap();
    await page.type('[name="confirm-password"]', '');
    await page.type('[name="confirm-password"]', 'whatever');

    await submitEl.tap();

    let html = await page.waitForFunction(() => {
      const html = document.querySelector('.app-page-container');
      return html.innerText;
    });

    //expect(html).toContain('Username already taken');
  });
});
