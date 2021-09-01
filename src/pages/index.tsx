import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export function HomePage(){
  const { t } = useTranslation("common");
  return (
    <div>
      <h1>{t("main.description")}</h1>
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