import { Page, expect } from "@playwright/test";
import { AbstractPage } from "../abstractPage";
export class LoginPage extends AbstractPage {
  url = "http://localhost:8080/basic_auth";
  congrats = undefined;
  constructor(page: Page) {
    super(page);
    this.congrats = this.page.locator(
      '//p[contains(text(), "Congratulations! You must have the proper credentials.")]'
    );
  }
  async checkIn(): Promise<void> {
    await expect(this.congrats).toBeVisible();
  }
}
