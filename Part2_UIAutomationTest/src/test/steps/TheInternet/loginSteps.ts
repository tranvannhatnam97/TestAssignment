import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../../hooks/pageFixture";
import { LoginPage } from "../../pom/TheInternet/loginPage";
Then("User navigate to Login Page", async function () {
  this.loginPage = new LoginPage(pageFixture.page);
  await this.loginPage.checkIn();
});
