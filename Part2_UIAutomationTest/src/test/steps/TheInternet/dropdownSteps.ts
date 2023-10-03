import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../../hooks/pageFixture";
import { DropdownPage } from "../../pom/TheInternet/dropdownPage";
import { expect } from "playwright/test";
Then("User navigate to Dropdown Page", async function () {
  this.dropdownPage = new DropdownPage(pageFixture.page);
  await this.dropdownPage.checkIn();
});
When("User choose Option 1", async function () {
  await this.dropdownPage.selectOptionWithIndex(1);
});
Then("Option 1 is selected", async function () {
  await expect(this.dropdownPage.page.locator("option[selected]")).toHaveText(
    "Option 1"
  );
});
When("User choose Option 2", async function () {
  await this.dropdownPage.selectOptionWithIndex(2);
});
Then("Option 2 is selected", async function () {
  await expect(this.dropdownPage.page.locator("option[selected]")).toHaveText(
    "Option 2"
  );
});
