import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { useParams } from 'react-router-dom';
import { Main, Container, Section } from '../../components/elements';
import { useEffect } from 'react';
import { useState } from 'react';
import { httpRequest } from '../../utils';
import { ENDPOINTS } from '../../config';
import ProductImage from './components/productImage/ProductImage';
import { ContainerProduct } from './Product.styled';
import ProductInformation from './components/productInfomation/ProductInformation';
import ProductContent from './components/productContent/ProductContent';

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
  }, [productID]);

  if (loading) return <div>Cargando...</div>;

  return (
    <>
      <Header />
      <Main>
        <Section>
          <Container>
            <ContainerProduct>
              <ProductImage image={productInfo.image} title={productInfo.title} />
              <ProductContent product={productInfo} />
            </ContainerProduct>
            <ProductInformation
              features={productInfo.features}
              description={productInfo.description}
            />
          </Container>
        </Section>
      </Main>
      <Footer />
    </>
  );
}
