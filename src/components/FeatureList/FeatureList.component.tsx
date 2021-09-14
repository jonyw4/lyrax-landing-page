import { Feature } from "../Feature";
import { FeatureListProps } from "./FeatureList.props";

export function FeatureList({ list }: FeatureListProps) {
  return (
    <section>
      {list.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </section>
  );
}
