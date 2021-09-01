import { HomePageDriver } from "../domain";

export class HomePagePlaywrightDriver implements HomePageDriver {
  async getCompanyNameFromHeader(): Promise<string> {
    throw new Error("Method not implemented.");
  }
  async getCompanyIdFromFooter(): Promise<string> {
    throw new Error("Method not implemented.");
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