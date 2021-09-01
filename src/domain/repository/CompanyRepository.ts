import { CompanyInfo, CompanyPartner } from "../entities";

export interface CompanyRepository {
  getInfo(): Promise<CompanyInfo> | CompanyInfo;
  getPartners(): Promise<CompanyPartner[]> | CompanyPartner[];
}