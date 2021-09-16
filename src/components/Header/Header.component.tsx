import clsx from 'clsx';
import { Logo } from '../Logo'
import { useLocale } from '../_hooks'

export function Header() {
  const { setLocale, locale } = useLocale();
  return (
    <header className="max-w-screen-lg mx-auto px-3 py-6">
      <div className="flex flex-wrap justify-between items-center">
        <div>
          <Logo />
        </div>
        <div className="divide-x">
          <button
            onClick={() => setLocale("pt-BR")}
            data-test="button-change-i18-pt-BR"
            className={clsx("px-2", { "font-weigh-700": locale === "pt-BR" })}
          >
            PT
          </button>
          <button
            onClick={() => setLocale("en")}
            data-test="button-change-i18-en"
            className={clsx("px-2", { "font-weigh-700": locale === "en" })}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
