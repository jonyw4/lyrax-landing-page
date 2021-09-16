import { Logo } from '../Logo'
import { BtnLanguage  } from '../BtnLanguage';


export function Header() {

  return (
    <header className="max-w-screen-lg mx-auto px-3 py-6">
      <div className="flex flex-wrap justify-between items-center">
        <div>
          <Logo />
        </div>
        <div className="divide-x">
          <BtnLanguage language="pt-BR" />
          <BtnLanguage language="en" />
        </div>
      </div>
    </header>
  );
}
