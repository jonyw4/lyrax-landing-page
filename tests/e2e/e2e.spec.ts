import { CompanyInMemoryRepo } from '../../src/infra/CompanyInMemoryRepo';
import { HomePageDriver } from './domain'
import { HomePagePlaywrightDriver } from './infra/HomePagePlaywrightDriver';
import { PlaywrightTestBrowser } from './infra/PlaywrightTestBrowser';

const companyRepo = new CompanyInMemoryRepo();

const companyInfo = companyRepo.getInfo();
const partners = companyRepo.getPartners();
const anaLiviaPartner = partners.find((partner) => partner.name === "Ana");
const jonathanPartner = partners.find((partner) => partner.name === "Jonathan");

let homePageDriver: HomePageDriver;

describe('E2E', () => {
  let playwrightTestBrowser: PlaywrightTestBrowser;

  beforeAll(async () => {
    playwrightTestBrowser = await PlaywrightTestBrowser.getInstance();
    homePageDriver = new HomePagePlaywrightDriver(playwrightTestBrowser);
    await homePageDriver.goToHomePage();
  });

  afterAll(async () => {
    await playwrightTestBrowser.finish();
  });

  it("should be able to see the company name in the header", async () => {
    const companyName = await homePageDriver.getCompanyNameFromHeader();
    expect(companyName).toBe("Lyrax");
  });

  it("should be able to see the company ID in the footer", async () => {
    const id = await homePageDriver.getCompanyIdFromFooter();
    expect(id).toBe(companyInfo.id);
  });

  it("should be able to see the email in the footer", async () => {
    const email = await homePageDriver.getCompanyEmailFromFooter();
    expect(email).toBe(companyInfo.email);
  });

  describe("Social Media", () => {
    it("should be able to see the Facebook link in the footer", async () => {
      const companyFacebookLink = companyInfo.socialMediaPages.find(
        ({ name }) => name === "Facebook"
      ).url;
       
      const link = await homePageDriver.getFacebookLinkFromSocialMediaSection();
      expect(link).toBe(companyFacebookLink);
    });

    it("should be able to see the Instagram link in the footer", async () => {
      const companyInstagramLink = companyInfo.socialMediaPages.find(
        ({ name }) => name === "Instagram"
      ).url;
       
      const link = await homePageDriver.getInstagramLinkFromSocialMediaSection();
      expect(link).toBe(companyInstagramLink);
    });
  });

  describe("Partners", () => {
    it("should be able to see Ana Livia Linkedin", async () => {
      const anaLiviaLinkedin = anaLiviaPartner.socialMediaPages.find(
        ({ name }) => name === "Linkedin"
      ).url;

      const link =
        await homePageDriver.getAnaLiviaLinkedinLinkFromPartnersSection();
      expect(link).toBe(anaLiviaLinkedin);
    });

    it("should be able to see Jonathan Celio Linkedin", async () => {
      const jonathanLinkedin = jonathanPartner.socialMediaPages.find(
        ({ name }) => name === "Linkedin"
      ).url;

      const link =
        await homePageDriver.getJonathanLinkedinLinkFromPartnersSection();
      expect(link).toBe(jonathanLinkedin);
    });
  });

  describe("A11y", () => {
    it("should be able to change the locale from page", async () => {
      await homePageDriver.changeLocaleTo("en");
      const locale = homePageDriver.getLocale();
      expect(locale).toBe("en");
    });
  });
});