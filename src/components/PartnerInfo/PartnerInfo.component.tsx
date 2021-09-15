import { PartnerInfoProps } from "./PartnerInfo.props";

export function PartnerInfo({
  partner: { id, name, title, email, socialMediaPages },
}: PartnerInfoProps) {
  return (
    <article className="mb-12 text-center">
      <h3 className="text-3xl text-gray-900 font-semibold">{name}</h3>
      <h4 className="text-1xl text-gray-900 font-semibold">{title}</h4>

      <ul className="flex justify-center divide-x">
        <li className="text-sm px-2 uppercase text-gray-500">
          <a href={`mailto:${email}`}>E-mail</a>
        </li>

        {socialMediaPages.map((page) => (
          <li key={page.url} className="text-sm px-2 uppercase text-gray-500">
            <a
              href={page.url}
              data-test={`partner-${id}-social-media-${page.name.toLowerCase()}`}
            >
              {page.name}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
