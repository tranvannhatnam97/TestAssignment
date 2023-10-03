import { Page, expect } from "@playwright/test";
import { AbstractPage } from "../abstractPage";
export class CheckboxesPage extends AbstractPage {
  url = "http://localhost:8080/checkboxes";
  label = undefined;
  checkbox1 = undefined;
  checkbox2 = undefined;
  constructor(page: Page) {
    super(page);
    this.label = this.page.locator('//h3[text() = "Checkboxes"]');
    this.checkbox1 = this.page.locator('//input[@type="checkbox"][1]');
    this.checkbox2 = this.page.locator('//input[@type="checkbox"][2]');
  }
  async checkIn(): Promise<void> {
    await expect(this.label).toBeVisible();
    await expect(this.checkbox1).toBeVisible();
    await expect(this.checkbox1).toBeVisible();
  }
  async isCheckbox1Checked() {
    return this.page.isChecked('//input[@type="checkbox"][1]');
  }
  async isCheckbox2Checked() {
    return this.page.isChecked('//input[@type="checkbox"][2]');
  }
}
