export interface HomePageDriver {
  getCompanyNameFromHeader(): Promise<string>;
  getCompanyIdFromFooter(): Promise<string>;
  getCompanyEmailFromFooter(): Promise<string>;
  getFacebookLinkFromSocialMediaSection(): Promise<string>;
  getInstagramLinkFromSocialMediaSection(): Promise<string>;
  getAnaLiviaLinkedinLinkFromPartnersSection(): Promise<string>;
  getJonathanLinkedinLinkFromPartnersSection(): Promise<string>;
  getLocale(): Promise<string>;
  goToHomePage(): Promise<void>;
  changeLocaleTo(locale: string): Promise<void>;
}