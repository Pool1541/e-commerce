import { Main, Container, Section } from '../../components/elements';
import { ContainerProduct } from './Product.styled';
import { fetchProductById } from '../../repositories/productRepository';
import { useParams } from 'react-router-dom';
import ProductInformation from './components/productInfomation/ProductInformation';
import ProductContent from './components/productContent/ProductContent';
import useDataFetcher from '../../hooks/useDataFetcher';
import ProductImage from './components/productImage/ProductImage';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function Product() {
  const { productID } = useParams();
  const { data: productInfo, loading } = useDataFetcher({
    fetcherFn: fetchProductById,
    args: {
      id: productID,
    },
    dependencies: [productID],
  });

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
