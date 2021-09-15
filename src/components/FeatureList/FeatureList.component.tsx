import { Feature } from "../Feature";
import { FeatureListProps } from "./FeatureList.props";

export function FeatureList({ list }: FeatureListProps) {
  return (
    <section className="max-w-screen-lg mx-auto px-3 py-16">
      {list.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </section>
  );
}
