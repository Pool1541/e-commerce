import { ProductFeaturesContainer } from './ProductFeatures.styled';

export default function ProductFeatures({ features }) {
  features = features.slice(0, 6);
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
