import { useCompanyInfo } from "../_hooks";

export function Footer(){
  const companyInfo = useCompanyInfo()
  return (
    <footer>
      <span data-test="footer-company-info-id">
        {companyInfo.id}
      </span>
      <a
        href={`mailto:${companyInfo.email}`}
        data-test="footer-company-info-email"
      >
        {companyInfo.email}
      </a>
    </footer>
  );
}