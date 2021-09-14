import { useCompanyInfo } from "../_hooks";

export function Footer(){
  const companyInfo = useCompanyInfo()
  return (
    <footer className="bg-gray-100">
      <div className="max-w-screen-lg mx-auto px-3 py-16">
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

        <span data-test="footer-company-info-id">{companyInfo.id}</span>
      </div>
    </footer>
  );
}