import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { useParams } from 'react-router-dom';
import { Main, Container, Section } from '../../components/elements';
import { useEffect } from 'react';
import { useState } from 'react';
import { httpRequest } from '../../utils';
import { ENDPOINTS } from '../../config';
import ProductImage from './components/productImage/ProductImage';
import { ContainerProduct, ProductBody, ProductHeader, SeccionLittleDes } from './Product.styled';
import ProductQuantity from './components/productQuantity/productQuantity';
import ProductInformation from './components/productInfomation/ProductInformation';
import ProductButtons from './components/productButtons/ProductButtons';

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
                <ProductBody>
                  <SeccionLittleDes>
                    <h1>Descripcion</h1>
                  </SeccionLittleDes>
                  <SeccionLittleDes>
                    <div className='body-price'>
                      <span>S/ 999.90</span>
                      <span>Todos los medios de pago</span>
                    </div>
                    <ProductQuantity />
                    <ProductButtons />
                  </SeccionLittleDes>
                </ProductBody>
              </div>
            </ContainerProduct>
            <ProductInformation />
          </Container>
        </Section>
      </Main>
      <Footer />
    </>
  );
}
