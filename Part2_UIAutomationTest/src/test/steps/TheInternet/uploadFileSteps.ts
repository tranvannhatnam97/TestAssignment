import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../../hooks/pageFixture";
import { UploadFilePage } from "../../pom/TheInternet/uploadFilePage";
import { expect } from "playwright/test";
Then("User navigate to UploadFile Page", async function () {
  this.uploadFilePage = new UploadFilePage(pageFixture.page);
  await this.uploadFilePage.checkIn();
});
When("User choose uploaded file with name {string}", async function (fileName) {
  await this.uploadFilePage.uploadFileWithName(fileName);
});
When("User click upload button", async function () {
  await this.uploadFilePage.clickUpload();
});
Then("File with name {string} is uploaded", async function (fileName) {
  await expect(
    await this.uploadFilePage.page.locator(
      `//div[contains(text(), "${fileName}")]`
    )
  ).toBeVisible();
});
