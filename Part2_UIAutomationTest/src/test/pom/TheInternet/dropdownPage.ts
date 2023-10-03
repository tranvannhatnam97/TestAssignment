import { Page, expect } from "@playwright/test";
import { AbstractPage } from "../abstractPage";
export class DropdownPage extends AbstractPage {
  url = "http://localhost:8080/dropdown";
  label = undefined;
  dropdownTab = undefined;
  constructor(page: Page) {
    super(page);
    this.label = this.page.locator('//h3[contains(text(), "Dropdown List")]');
    this.dropdownTab = this.page.$("#dropdown");
  }
  async checkIn(): Promise<void> {
    await expect(this.label).toBeVisible();
  }
  async selectOptionWithIndex(index: number) {
    await this.page.selectOption("#dropdown", `${index}`);
  }
}
