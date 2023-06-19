import { BodyInformation, ContainerInformation } from './ProductInformation.styles';

export default function ProductInformation() {
  return (
    <BodyInformation>
      <ContainerInformation>
        <h1>Especificaciones</h1>
      </ContainerInformation>
      <ContainerInformation>
        <h1>Información del producto</h1>
        <ul>
          <li>
            <p>
              Con la tarjeta de vídeo Asrock AMD RADEON RX 6500XT, disfruta horas de juego sin
              preocupaciones, ni pérdida de calidad. Cuenta con un sistema de enfriamiento de 2
              ventiladores.
            </p>
          </li>
          <li>
            <p>
              Esta tarjeta de video gamer te ayudará a destacar en los videojuegos. Una nueva
              generación de tarjetas de alta calidad y con el mejor performance. Trabaja con una
              memoria de 4GB GDDR6.
            </p>
          </li>
          <li>
            <p>
              Disfruta de una experiencia de juego amplificada, de gran fidelidad de gráficos. Su
              estética moderna le dará un gran estilo a tu setup.
            </p>
          </li>
        </ul>
      </ContainerInformation>
    </BodyInformation>
  );
}
