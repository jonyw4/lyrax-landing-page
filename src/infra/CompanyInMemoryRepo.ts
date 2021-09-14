import { CompanyInfo, CompanyPartner } from "../domain/entities";
import { CompanyRepository } from "../domain/repository/CompanyRepository";

export class CompanyInMemoryRepo implements CompanyRepository {
  getInfo(): CompanyInfo {
    return {
      id: "32.117.468/0001-57",
      email: "contato@lyrax.com.br",
      socialMediaPages: [
        { name: "Facebook", url: "https://www.facebook.com/lyrax.systems/" },
        { name: "Instagram", url: "https://www.instagram.com/lyrax.systems/" },
      ],
    };
  }
  getPartners(): CompanyPartner[] {
    return [
      {
        id: "jony",
        name: "Jonathan Celio",
        title: "Senior Software Engineer",
        email: "jonathan.clio@hotmail.com",
        socialMediaPages: [
          { name: "Facebook", url: "hhttps://www.facebook.com/jonyw4/" },
          { name: "Instagram", url: "https://www.instagram.com/jonycelio/" },
          { name: "Linkedin", url: "https://www.linkedin.com/in/jonycelio/" },
        ],
      },
      {
        id: "ana",
        name: "Ana Livia",
        title: "Senior Product Designer",
        email: "ana_livia_nunes@hotmail.com",
        socialMediaPages: [
          {
            name: "Facebook",
            url: "https://www.facebook.com/analivia.nunes.56",
          },
          { name: "Instagram", url: "https://www.instagram.com/nunesanna_/" },
          {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/analivianunes/",
          },
        ],
      },
    ];
  }
}