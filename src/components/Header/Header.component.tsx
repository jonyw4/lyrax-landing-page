import { HeaderProps } from "./Header.props";

export function Header({ changeLanguage }: HeaderProps) {
  return (
    <header>
      <span data-test="company-info">Lyrax</span>
      <button
        onClick={() => changeLanguage("pt-BR")}
        data-test="button-change-i18-pt-BR"
      >
        PT
      </button>
      <button
        onClick={() => changeLanguage("en")}
        data-test="button-change-i18-en"
      >
        EN
      </button>
    </header>
  );
}
