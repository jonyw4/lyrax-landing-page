import { SocialMediaPage } from './SocialMediaPage'

export interface CompanyPartner {
  id: string;
  name: string;
  title: string;
  email: string;
  socialMediaPages: SocialMediaPage[];
}