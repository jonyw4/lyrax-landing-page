import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { CompanyInMemoryRepo } from "../infra/CompanyInMemoryRepo";
import {
  Header,
  Footer,
  CompanyRepositoryContext,
  LocaleContext,
  PartnerList,
  FeatureList,
  WhatWeDo,
} from "../components";
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import Head from 'next/head'

export function HomePage() {
  const { t, i18n: { language } } = useTranslation();
  const router = useRouter();

  const setLanguage = (locale) =>
    router.push("/", `/${locale}`, { locale });

  const createFeatureListItem = (name: string) => ({
    title: t(`features.${name}.title`),
    description: t(`features.${name}.description`),
  });

  const companyRepo = new CompanyInMemoryRepo();

  const featureList = [
    createFeatureListItem("tech"),
    createFeatureListItem("teamWork"),
    createFeatureListItem("bestPractices"),
    createFeatureListItem("zeroToHeroDesign"),
  ];

  const serviceList = [
    t("whatWeDo.services.softwareAsService"),
    t("whatWeDo.services.softwareDevelopment"),
    t("whatWeDo.services.design"),
  ];
    
  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5b21b6" />
        <meta name="apple-mobile-web-app-title" content="Lyrax" />
        <meta name="application-name" content="Lyrax" />
        <meta name="msapplication-TileColor" content="#5b21b6" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      
      <LocaleContext.Provider value={{ setLocale: setLanguage, locale: language }}>
        <CompanyRepositoryContext.Provider value={companyRepo}>
          <div className="bg-gradient-to-r from-purple-800 to-indigo-700 text-white">
            <Header />
            <WhatWeDo text={t(`whatWeDo.title`)} services={serviceList} />
          </div>
          <main>
            <FeatureList list={featureList} />
            <PartnerList />
          </main>
          <Footer
            text={{
              copyright: t("copyright", {
                year: new Date().getFullYear(),
              }),
              companyId: t("companyId"),
            }}
          />
        </CompanyRepositoryContext.Provider>
      </LocaleContext.Provider>
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  const localeProps = await serverSideTranslations(locale, ["common"])
  
  return {
    props: {
      ...localeProps
    },
  };
};

export default HomePage;