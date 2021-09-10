import { useCompanyPartners } from "../_hooks";

export function Partners() {
  const partners = useCompanyPartners();
  return (
    <section>
      {partners.map(({ id, email, name, socialMediaPages }) => (
        <article key={id}>
          <h3>{name}</h3>

          <a href={`mailto:${email}`}>
            {email}
          </a>

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
      ))}
    </section>
  );
}
