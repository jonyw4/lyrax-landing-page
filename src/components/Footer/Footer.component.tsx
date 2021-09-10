import { useCompanyInfo } from "../_hooks";

export function Footer(){
  const companyInfo = useCompanyInfo()
  return (
    <footer>
      <span data-test="footer-company-info-id">{companyInfo.id}</span>
      <a
        href={`mailto:${companyInfo.email}`}
        data-test="footer-company-info-email"
      >
        {companyInfo.email}
      </a>
      {companyInfo.socialMediaPages.map(({ name, url }) => (
        <a 
          key={name} 
          href={url} 
          data-test={`footer-company-social-media-${name.toLowerCase()}`}
        >
          {name}
        </a>
      ))}
    </footer>
  );
}