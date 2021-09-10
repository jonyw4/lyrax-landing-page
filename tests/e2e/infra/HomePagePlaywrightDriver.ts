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
    return await this.getPage().textContent(
      "[data-test=footer-company-info-id]"
    );
  }
  async getCompanyEmailFromFooter(): Promise<string> {
    return await this.getPage().textContent(
      "[data-test=footer-company-info-email]"
    );
  }
  async getFacebookLinkFromSocialMediaSection(): Promise<string> {
     return await this.getPage().getAttribute(
       "[data-test=footer-company-social-media-facebook]",
       "href"
     );
  }
  async getInstagramLinkFromSocialMediaSection(): Promise<string> {
    return await this.getPage().getAttribute(
      "[data-test=footer-company-social-media-instagram]",
      "href"
    );
  }
  async getAnaLiviaLinkedinLinkFromPartnersSection(): Promise<string> {
    return await this.getPage().getAttribute(
      "[data-test=partner-ana-social-media-linkedin]",
      "href"
    );
  }
  async getJonathanLinkedinLinkFromPartnersSection(): Promise<string> {
    return await this.getPage().getAttribute(
      "[data-test=partner-jony-social-media-linkedin]",
      "href"
    );
  }
  async getLocale(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async changeLocaleTo(locale: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}