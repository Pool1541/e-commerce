import { ProductFeaturesContainer } from './ProductFeatures.styled';

export default function ProductFeatures({ features }) {
  const index = features.findIndex((feat) => feat.includes('Vendido por'));
  features = index !== -1 ? features.slice(0, index).slice(0, 6) : features.slice(0, 6);
  return (
    <ProductFeaturesContainer>
      <ul>
        {features.map((feature, i) => (
          <li key={i}>
            <p>{feature}</p>
          </li>
        ))}
      </ul>
    </ProductFeaturesContainer>
  );
}
