import { HeaderProps } from "./Header.props";

export function Header({ changeLanguage }: HeaderProps) {
  return (
    <header className="max-w-screen-lg mx-auto px-3 py-6">
      <div className="flex flex-wrap justify-between items-center">
        <div>
          <img
            src="https://lyrax.com.br/img/logo.svg"
            alt="Lyrax"
            title="Lyrax"
            data-test="company-info"
            width="80"
          />
        </div>
        <div className="divide-x">
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
        </div>
      </div>
    </header>
  );
}
