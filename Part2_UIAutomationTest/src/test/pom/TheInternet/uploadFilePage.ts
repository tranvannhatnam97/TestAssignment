import { Page, expect } from "@playwright/test";
import { AbstractPage } from "../abstractPage";
export class UploadFilePage extends AbstractPage {
  url = "http://localhost:8080/upload";
  label = undefined;
  congrats = undefined;
  uploadButton = undefined;
  dirPath = "src/upload_file/"; //absolute path from folder Part2_UIAutonmatioTest
  constructor(page: Page) {
    super(page);
    this.label = this.page.locator('//h3[text() = "File Uploader"]');
    this.uploadButton == this.page.locator("#file-submit");
  }
  async checkIn(): Promise<void> {
    await expect(this.label).toBeVisible();
  }
  async uploadFileWithName(fileName) {
    await this.page.setInputFiles(
      'input[id="file-upload"]',
      this.dirPath + fileName
    );
  }
  async clickUpload() {
    await this.page.click("input[id=file-submit]:visible", { force: true });
  }
}
