import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Header } from "../components";

export function HomePage(){
  return (
    <div>
      <Header />
    </div>
  );
}

export const getStaticProps = async ({ locale }) => {
  const localeProps = await serverSideTranslations(locale, ["common"])
  return {
    props: {
      ...localeProps,
    },
  };
};

export default HomePage;