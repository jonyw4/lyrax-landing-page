import { CompanyInfo, CompanyPartner } from "../entities";

export interface CompanyRepository {
  getInfo(): CompanyInfo;
  getPartners(): CompanyPartner[];
}