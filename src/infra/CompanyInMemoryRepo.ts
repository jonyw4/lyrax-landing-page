import { CompanyInfo, CompanyPartner } from "../domain/entities";
import { CompanyRepository } from "../domain/repository/CompanyRepository";

export class CompanyInMemoryRepo implements CompanyRepository {
  getInfo(): CompanyInfo {
    return {
      id: "123",
      email: "jonathan.test@",
      socialMediaPages: [
        { name: "Facebook", url: "https://www.facebook.com" },
        { name: "Instagram", url: "https://www.twitter.com" },
        { name: "Linkedin", url: "https://www.linkedin.com" },
      ],
    };
  }
  getPartners(): CompanyPartner[] {
    return [
      {
        name: "Jonathan Célio",
        email: "jonathan.clio@hotmail.com",
        socialMediaPages: [
          { name: "Facebook", url: "https://www.facebook.com" },
          { name: "Instagram", url: "https://www.twitter.com" },
          { name: "Linkedin", url: "https://www.linkedin.com" },
        ],
      },
      {
        name: "Ana Livia Nunes",
        email: "ana_livia_nunes@hotmail.com",
        socialMediaPages: [
          { name: "Facebook", url: "https://www.facebook.com" },
          { name: "Instagram", url: "https://www.twitter.com" },
          { name: "Linkedin", url: "https://www.linkedin.com" },
        ],
      },
    ];
  }
}