import { useCompanyPartners } from "../_hooks";
import { PartnerInfo } from '../PartnerInfo'

export function PartnerList() {
  const partners = useCompanyPartners();
  return (
    <section className="max-w-screen-lg mx-auto px-3 py-16">
      {partners.map((partner) => (
        <PartnerInfo partner={partner} key={partner.id} />
      ))}
    </section>
  );
}
