import { useCompanyPartners } from "../_hooks";
import { PartnerInfo } from '../PartnerInfo'

export function PartnerList() {
  const partners = useCompanyPartners();
  return (
    <section>
      {partners.map((partner) => (
        <PartnerInfo partner={partner} key={partner.id} />
      ))}
    </section>
  );
}
