import { useCompanyInfo } from "../_hooks";
import { Logo } from "../Logo";
import { FooterProps } from "./Footer.props";

export function Footer({ text }: FooterProps) {
  const companyInfo = useCompanyInfo();
  return (
    <footer className="bg-gray-100">
      <div className="flex flex-col items-center max-w-screen-lg mx-auto px-3 py-16 gap-3">
        <Logo />
        <ul className="flex divide-x">
          <li className="text-sm px-2 uppercase text-gray-500">
            <a
              href={`mailto:${companyInfo.email}`}
              data-test="footer-company-info-email"
            >
              Email
            </a>
          </li>

          {companyInfo.socialMediaPages.map(({ name, url }) => (
            <li key={name} className="text-sm px-2 uppercase text-gray-500">
              <a
                href={url}
                data-test={`footer-company-social-media-${name.toLowerCase()}`}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        <span className="flex divide-x">
          <span className="text-sm px-2 uppercase text-gray-500">
            {text.copyright}
          </span>
          <span className="text-sm px-2 uppercase text-gray-500">
            <span>{text.companyId}: </span>
            <span data-test="footer-company-info-id">{companyInfo.id}</span>
          </span>
        </span>
      </div>
    </footer>
  );
}