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

describe('LoginForm', () => {
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
    await page.goto('http://localhost:3000/forms/login');
  });

  afterEach(async function() {
    await page.close();
  });

  test('login form handles duplicate user names correctly', async () => {
    const userNameEl = await page.$('[name="username"]');
    const passwordEl = await page.$('[name="password"]');
    const confirmPasswordEl = await page.$('[name="confirm-password"]');
    const submitEl = await page.$('[type="submit"]');

    await userNameEl.tap();

    // holding down Shift in order to select and delete some text
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

    await page.waitForSelector('.login-form-error');
    const errorText = await page.$eval('.login-form-error', e => e.innerHTML);

    expect(errorText).toBe('Username already taken');
  });

  test('login form handles non matching passwords', async () => {
    const passwordEl = await page.$('[name="password"]');
    const confirmPasswordEl = await page.$('[name="confirm-password"]');
    const submitEl = await page.$('[type="submit"]');

    await passwordEl.tap();
    await page.type('[name="password"]', 'whatever');

    await confirmPasswordEl.tap();
    await page.type('[name="confirm-password"]', 'whatever2');

    await submitEl.focus();

    await page.waitForSelector('.login-form-error');
    const errorText = await page.evaluate(() => document.querySelector('.login-form-error').textContent);
    expect(errorText).toBe('Passwords do not match');
  });
});
