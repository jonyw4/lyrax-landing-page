import { HomePageDriver } from "../domain";
import { PlaywrightDriver } from "./PlaywrightDriver";

const LANDING_PAGE_URL =
  process.env.LANDING_PAGE_URL || "http://localhost:3000";

export class HomePagePlaywrightDriver
  extends PlaywrightDriver
  implements HomePageDriver
{
  public async goToHomePage() {
    await this.getPage().goto(LANDING_PAGE_URL);
  }
  async getCompanyNameFromHeader(): Promise<string> {
    return await this.getPage().textContent("header");
  }
  async getCompanyIdFromFooter(): Promise<string> {
    return await this.getPage().textContent("footer");
  }
  async getCompanyEmailFromFooter(): Promise<string> {
    throw new Error("Method not implemented.");
  }
  async getFacebookLinkFromSocialMediaSection(): Promise<string> {
    throw new Error("Method not implemented.");
  }
  async getInstagramLinkFromSocialMediaSection(): Promise<string> {
    throw new Error("Method not implemented.");
  }
  async getAnaLiviaLinkedinLinkFromPartnersSection(): Promise<string> {
    throw new Error("Method not implemented.");
  }
  async getJonathanLinkedinLinkFromPartnersSection(): Promise<string> {
    throw new Error("Method not implemented.");
  }
  async getLocale(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async changeLocaleTo(locale: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}