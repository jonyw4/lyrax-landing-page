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