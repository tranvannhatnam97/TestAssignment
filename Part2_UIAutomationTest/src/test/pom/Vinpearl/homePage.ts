import { Page, expect } from "@playwright/test";
import { AbstractPage } from "../abstractPage";
export class HomePage extends AbstractPage {
  url = "https://vinpearl.com/vi/promotion";
  chatbotButton = undefined;
  chatbotButtonState = undefined;
  startButton = undefined;
  nameTb = undefined;
  emailTb = undefined;
  phoneTb = undefined;
  confirmInfoButton = undefined;
  chatbotMessages = undefined;
  lastChatbotMessage = undefined;
  userMessages = undefined;
  lastUserMessage = undefined;
  chatTb = undefined;
  sendButton = undefined;
  constructor(page: Page) {
    super(page);
    this.chatbotButton = this.page.locator('//div[@id="aip-chat-box"]');
    this.startButton = this.page.locator("#welcome_screen_button");
    this.chatbotButtonState = this.page.locator(
      '//div[@id="aip-chat-box"]/div[1]'
    );
    this.nameTb = this.page.locator('//input[@id="vinbase_input_name"]');
    this.emailTb = this.page.locator('//input[@id="vinbase_input_email"]');
    this.phoneTb = this.page.locator('//input[@id="vinbase_input_phone"]');
    this.confirmInfoButton = this.page.locator("#vinbase_submit_user_info");
    this.chatbotMessages = this.page.locator('//div[@class="chat-message"]');
    this.lastChatbotMessage = this.page.locator(
      '//div[@class="chat-message"][last()]/*[last()]'
    );
    this.userMessages = this.page.locator(".chat-message--right");
    this.lastUserMessage = this.page.locator(
      '//div[contains(@class,"chat-message--right")][last()]/div[contains(@class,"chat-message__text")]'
    );
    this.chatTb = this.page.locator("#chatInput");
    this.sendButton = this.page.locator("#btn_send");
  }
  async checkIn(): Promise<void> {
    await expect(this.page).toHaveTitle("Trang ưu đãi chính | Vinpearl");
  }
  async access(): Promise<void> {
    super.access();
  }
  async isPopupVisible(): Promise<void> {
    console.log("hey" + (await this.chatbotButtonState.getAttribute("class")));
    await expect(this.chatbotButtonState).toHaveClass(/is-visible/);
  }
  async isInfoFormVisible(): Promise<void> {
    await expect(this.nameTb).toBeVisible();
  }
  async isChatbotStarted() {
    await expect(this.chatbotMessages.first()).toBeVisible();
  }
  async chat(message: string) {
    await this.chatTb.type(message);
    await this.sendButton.click();
  }
}
