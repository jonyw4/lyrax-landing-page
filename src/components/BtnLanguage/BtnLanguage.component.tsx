import clsx from "clsx";
import { useLocale } from "../_hooks";
import { BtnLanguageProps } from "./BtnLanguage.props";

export function BtnLanguage({ language }: BtnLanguageProps) {
  const { setLocale, locale: currentLanguage } = useLocale();
  const isActive = currentLanguage === language;
  const languageText = language.toUpperCase();

  return (
    <button
      onClick={() => setLocale(language)}
      data-test="button-change-i18-pt-BR"
      className={clsx("px-2", {
        "font-bold underline": isActive,
      })}
    >
      {languageText}
    </button>
  );
}
