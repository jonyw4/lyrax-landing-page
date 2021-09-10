import { useCompanyInfo } from "../_hooks";

export function Footer(){
  const companyInfo = useCompanyInfo()
  return <footer>{companyInfo.id}</footer>;
}