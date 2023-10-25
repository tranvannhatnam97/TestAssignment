import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../../hooks/pageFixture";
import { HomePage } from "../../pom/Vinpearl/homePage";
import { expect } from "playwright/test";
Given("User go to homepage", { timeout: 30 * 1000 }, async function () {
  this.homepage = new HomePage(pageFixture.page);
  this.homepage.access();
});
When("User click chatbot button", async function () {
  this.homepage.chatbotButton.click();
  this.homepage.page.waitForTimeout(1000);
});
Then("Chatbot show up", async function () {
  await this.homepage.isPopupVisible();
});
When("User click Start", async function () {
  await this.homepage.startButton.click();
  await this.homepage.page.waitForTimeout(1000);
});
Then("Required infomation form show up", async function () {
  await this.homepage.isInfoFormVisible();
});
When(
  "User type infomation with name: {string}, email: {string}, phone: {string} and click Start",
  async function (name, email, phone) {
    await this.homepage.nameTb.type(name);
    await this.homepage.emailTb.type(email);
    await this.homepage.phoneTb.type(phone);
    await this.homepage.page.waitForTimeout(1000);
    await this.homepage.confirmInfoButton.click();
    await this.homepage.page.waitForTimeout(1000);
  }
);
Then("Chatbot start", async function () {
  await this.homepage.isChatbotStarted();
});
When("User chat {string}", async function (message) {
  await this.homepage.chat(message);
  await this.homepage.page.waitForTimeout(3000);
});
Then("User message appear: {string}", async function (message) {
  await expect(this.homepage.lastUserMessage).toContainText(message);
});
Then("Chatbot response message contain: {string}", async function (response) {
  await expect.soft(this.homepage.lastChatbotMessage).toContainText(response);
});
