import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../../hooks/pageFixture";
import { CheckboxesPage } from "../../pom/TheInternet/checkboxesPage";
import { expect } from "playwright/test";
Then("User navigate to Checkboxes Page", async function () {
  this.checkboxesPage = new CheckboxesPage(pageFixture.page);
  await this.checkboxesPage.checkIn();
});
When("User click checkbox1", async function () {
  await this.checkboxesPage.checkbox1.click();
});
Then("Checkbox1 is checked", async function () {
  await expect(await this.checkboxesPage.isCheckbox1Checked()).toBeTruthy();
});
When("User click checkbox2", async function () {
  await this.checkboxesPage.checkbox2.click();
});
Then("Checkbox2 is unchecked", async function () {
  await expect(await this.checkboxesPage.isCheckbox2Checked()).toBeFalsy();
});
