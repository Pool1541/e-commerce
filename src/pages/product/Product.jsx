import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { useParams } from 'react-router-dom';
import { Main, Container, Subtitle, Section } from '../../components/elements';
import { useEffect } from 'react';
import { useState } from 'react';
import { httpRequest } from '../../utils';
import { ENDPOINTS } from '../../config';
import ProductImage from './components/productImage/ProductImage';
import { BodyQuantity, ContainerProduct, ProductHeader } from './Product.styled';
import ProductQuantity from './components/productQuantity/productQuantity';

export default function Product() {
  const [productInfo, setProductInfo] = useState();
  const [loading, setLoading] = useState(true);
  const { productID } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const endPoint = `${ENDPOINTS.GET_PRODUCT_BY_ID}/${productID}`;
        const product = await httpRequest({}, endPoint);
        setProductInfo(product);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, []);

  if (loading) return <div>Cargando...</div>;

  return (
    <>
      <Header />
      <Main>
        <Section>
          <Container>
            <ContainerProduct>
              <ProductImage image={productInfo.image} title={productInfo.title} />
              <div className='product-container'>
                <ProductHeader>
                  <h3>{productInfo.brand}</h3>
                  <h1>{productInfo.title}</h1>
                </ProductHeader>
                <div className='product-body'>
                  <div className='left'></div>
                  <div className='right'>
                    <div className='body-price'>
                      <span>S/ 999.90</span>
                      <span>Todos los medios de pago</span>
                    </div>
                    <BodyQuantity>
                      <ProductQuantity />
                    </BodyQuantity>
                    <div className='body-basket-buttons'>
                      <button>Agregar al carrito</button>
                      <button>Comprar</button>
                    </div>
                  </div>
                </div>
              </div>
            </ContainerProduct>
            <div className='body-description'>
              <ul>
                <li>
                  <p>
                    Con la tarjeta de vídeo Asrock AMD RADEON RX 6500XT, disfruta horas de juego sin
                    preocupaciones, ni pérdida de calidad. Cuenta con un sistema de enfriamiento de
                    2 ventiladores.
                  </p>
                </li>
                <li>
                  <p>
                    Esta tarjeta de video gamer te ayudará a destacar en los videojuegos. Una nueva
                    generación de tarjetas de alta calidad y con el mejor performance. Trabaja con
                    una memoria de 4GB GDDR6.
                  </p>
                </li>
                <li>
                  <p>
                    Disfruta de una experiencia de juego amplificada, de gran fidelidad de gráficos.
                    Su estética moderna le dará un gran estilo a tu setup.
                  </p>
                </li>
              </ul>
            </div>
          </Container>
        </Section>
      </Main>
      <Footer />
    </>
  );
}
