import { WhatWeDoProps } from "./WhatWeDo.props";

export function WhatWeDo({text, services}: WhatWeDoProps){
  return (
    <section>
      <h3>{text}</h3>
      {services.map((service, index) => (
        <li key={index}>{service}</li>
      ))}
    </section>
  );
}