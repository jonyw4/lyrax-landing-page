import { WhatWeDoProps } from "./WhatWeDo.props";

export function WhatWeDo({text, services}: WhatWeDoProps){
  return (
    <section className="max-w-screen-lg mx-auto px-3 pt-20 pb-32">
      <h3 className="text-4xl font-bold whitespace-pre-line leading-hero pb-4">
        {text}
      </h3>
      <ul className="flex divide-x">
        {services.map((service, index) => (
          <li key={index} className="text-sm px-2 uppercase text-gray-200">
            {service}
          </li>
        ))}
      </ul>
    </section>
  );
}