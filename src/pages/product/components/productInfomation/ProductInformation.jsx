import { BodyInformation, ContainerInformation } from './ProductInformation.styles';

export default function ProductInformation({ description, features }) {
  description = description.filter((desc) => desc !== '');

  const index = features.findIndex((feat) => feat.includes('Vendido por'));
  features = index !== -1 ? features.slice(0, index) : features;

  return (
    <BodyInformation>
      <ContainerInformation>
        <h1>Especificaciones</h1>
        <ul>
          {features.map((item, i) => (
            <li key={i}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </ContainerInformation>
      <ContainerInformation>
        <h1>Descripción</h1>
        <ul>
          {description.map((item, i) => (
            <li key={i}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </ContainerInformation>
    </BodyInformation>
  );
}
