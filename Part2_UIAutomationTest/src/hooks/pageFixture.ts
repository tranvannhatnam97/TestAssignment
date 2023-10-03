import { Page, Browser } from "@playwright/test";
class PageFixture {
  //@ts-ignore
  page = undefined as Page;
  browser = undefined as Browser;
  constructor() {}
}
export let pageFixture = new PageFixture();
