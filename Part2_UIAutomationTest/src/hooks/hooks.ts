import { BeforeAll, AfterAll, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, Page, webkit, firefox } from "@playwright/test";
import { pageFixture } from "./pageFixture";
// import { defineParams } from "../commons/define";
let page: Page;
let browser: Browser;
let context: any;
setDefaultTimeout(60 * 1000 * 2);
BeforeAll(async function () {
  browser = await webkit.launch({ headless: false });
  const context = await browser.newContext({
    httpCredentials: {
      username: "admin",
      password: "admin",
    },
  });
  page = await context.newPage();
  pageFixture.page = page;
  pageFixture.browser = browser;
});
AfterAll(async function () {
  // await pageFixture.page.waitForLoadState("networkidle");
  await page.close();
  await browser.close();
});
