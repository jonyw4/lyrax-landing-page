import { PartnerInfoProps } from "./PartnerInfo.props";

export function PartnerInfo({
  partner: { id, name, title, email, socialMediaPages },
}: PartnerInfoProps) {
  return (
    <article>
      <h3>{name}</h3>
      <span>{title}</span>
      
      <a href={`mailto:${email}`}>{email}</a>

      {socialMediaPages.map((page) => (
        <a
          key={page.url}
          href={page.url}
          data-test={`partner-${id}-social-media-${page.name.toLowerCase()}`}
        >
          {page.name}
        </a>
      ))}
    </article>
  );
}