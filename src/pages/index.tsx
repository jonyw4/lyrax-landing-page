import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { CompanyInMemoryRepo } from "../infra/CompanyInMemoryRepo";
import { Header, Footer, CompanyRepositoryContext } from "../components";

export function HomePage() {
  const companyRepo = new CompanyInMemoryRepo();
  return (
    <CompanyRepositoryContext.Provider value={companyRepo}>
      <Header />
      <main />
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