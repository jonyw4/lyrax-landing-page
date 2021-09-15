import { FeatureProps } from "./Feature.props";

export function Feature({ title, description }: FeatureProps) {
  return (
    <article className="mb-12 text-center">
      <h3 className="text-3xl text-gray-900 font-semibold">{title}</h3>
      <p className="mt-6 text-xl leading-9">{description}</p>
    </article>
  );
}