import { Page, expect } from "@playwright/test";
import { AbstractPage } from "../abstractPage";
export class HomePage extends AbstractPage {
  welcome = undefined;
  basicAuthButton = undefined;
  checkboxesButton = undefined;
  dropdownButton = undefined;
  uploadFileButton = undefined;
  url = "http://localhost:8080/";
  constructor(page: Page) {
    super(page);
    this.welcome = this.page.locator(
      '//h1[@class="heading"][text() = "Welcome to the-internet"]'
    );
    this.basicAuthButton = this.page.locator('//a[text() = "Basic Auth"]');
    this.checkboxesButton = this.page.locator('//a[text() = "Checkboxes"]');
    this.dropdownButton = this.page.locator('//a[text() = "Dropdown"]');
    this.uploadFileButton = this.page.locator('//a[text() = "File Upload"]');
  }
  async checkIn(): Promise<void> {
    await expect(this.welcome).toBeVisible();
  }
  async access(): Promise<void> {
    super.access();
  }
  async clickBasicAuthButton() {
    await this.basicAuthButton.click();
  }
  async clickCheckboxesButton() {
    await this.checkboxesButton.click();
  }
  async clickDropdownButton() {
    await this.dropdownButton.click();
  }
  async clickUploadFileButton() {
    await this.uploadFileButton.click();
  }
}
