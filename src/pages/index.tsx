import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { CompanyInMemoryRepo } from "../infra/CompanyInMemoryRepo";
import {
  Header,
  Footer,
  CompanyRepositoryContext,
  PartnerList,
  FeatureList,
  WhatWeDo,
} from "../components";
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

export function HomePage() {
  const { t } = useTranslation()
  const companyRepo = new CompanyInMemoryRepo();
  const router = useRouter();
  const changeLanguage = (language) =>
    router.push("/", `/${language}`, { locale: language });

  const createFeatureListItem = (name: string) => ({
    title: t(`features.${name}.title`),
    description: t(`features.${name}.description`),
  });

  const featureList = [
    createFeatureListItem("tech"),
    createFeatureListItem("teamWork"),
    createFeatureListItem("bestPractices"),
    createFeatureListItem("zeroToHeroDesign"),
  ];
    
  return (
    <CompanyRepositoryContext.Provider value={companyRepo}>
      <Header changeLanguage={changeLanguage} />
      <main>
        <WhatWeDo
          text={t(`whatWeDo.title`)}
          services={[
            t("whatWeDo.services.softwareAsService"),
            t("whatWeDo.services.softwareDevelopment"),
            t("whatWeDo.services.design"),
          ]}
        />
        <FeatureList list={featureList} />
        <PartnerList />
      </main>
      <Footer />
    </CompanyRepositoryContext.Provider>
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