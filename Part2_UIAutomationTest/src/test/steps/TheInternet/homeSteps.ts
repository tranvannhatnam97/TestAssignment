import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../../hooks/pageFixture";
import { HomePage } from "../../pom/TheInternet/homePage";
Given("User go to homepage", async function () {
  this.homepage = new HomePage(pageFixture.page);
  await this.homepage.access();
  await this.homepage.checkIn();
});
When("User click Basic Auth", async function () {
  await this.homepage.clickBasicAuthButton();
});
When("User click Checkboxes", async function () {
  await this.homepage.clickCheckboxesButton();
});
When("User click Dropdown", async function () {
  await this.homepage.clickDropdownButton();
});
When("User click File Upload", async function () {
  await this.homepage.clickUploadFileButton();
});
