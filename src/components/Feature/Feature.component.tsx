import { FeatureProps } from "./Feature.props";

export function Feature({ title, description }: FeatureProps) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}