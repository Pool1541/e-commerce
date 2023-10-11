import {
  BodyInformation,
  DescriptionContainer,
  FeatureContainer,
  StyleFeature,
} from './ProductInformation.styles';

export default function ProductInformation({ description, features }) {
  description = description.filter((desc) => desc !== '');

  const index = features.findIndex((feat) => feat.includes('Vendido por'));
  features = index !== -1 ? features.slice(0, index) : features;

  features = features.map((feat) => feat.split(':'));

  return (
    <BodyInformation>
      <FeatureContainer>
        <h1>Especificaciones</h1>
        <ul>
          {features.map((item, i) => (
            <li key={i}>
              <Feature feature={item} />
            </li>
          ))}
        </ul>
      </FeatureContainer>
      <DescriptionContainer>
        <h1>Descripción</h1>
        <ul>
          {description.map((item, i) => (
            <li key={i}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </DescriptionContainer>
    </BodyInformation>
  );
}

function Feature({ feature }) {
  return (
    <StyleFeature>
      <p>{feature[0]}</p>
      <p>{feature[1]}</p>
    </StyleFeature>
  );
}
