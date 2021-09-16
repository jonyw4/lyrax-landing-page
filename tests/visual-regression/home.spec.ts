import { HomePageDriver } from "../e2e/domain";
import { HomePagePlaywrightDriver } from "../e2e/infra/HomePagePlaywrightDriver";
import { PlaywrightTestBrowser } from "../e2e/infra/PlaywrightTestBrowser";
import { toMatchImageSnapshot } from "jest-image-snapshot"

expect.extend({ toMatchImageSnapshot });

describe('Visual Regression', () => {
  let homePageDriver: HomePageDriver;
  let playwrightTestBrowser: PlaywrightTestBrowser;

  beforeAll(async () => {
    playwrightTestBrowser = await PlaywrightTestBrowser.getInstance();
    homePageDriver = new HomePagePlaywrightDriver(playwrightTestBrowser);
    await homePageDriver.goToHomePage();
  });

  afterAll(async () => {
    await playwrightTestBrowser.finish();
  });

  const languages = ["pt-BR", "en"];
  
  describe('HomePage', () => {
    describe('locale pt-BR', () => {
      test.each(languages)(
        "given %s locale it should renders correctly",
        async (locale) => {
          await homePageDriver.changeLocaleTo(locale);
          const image = await homePageDriver.screenshot();
          expect(image).toMatchImageSnapshot({
            customSnapshotIdentifier: `home-page-${locale}-locale`,
          });
        }
      );
    });
  });
});