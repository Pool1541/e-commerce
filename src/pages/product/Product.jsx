import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { useParams } from 'react-router-dom';
import { Main, Container } from '../../components/elements';
import { useEffect } from 'react';
import { useState } from 'react';
import { httpRequest } from '../../utils';
import { ENDPOINTS } from '../../config';

export default function Product() {
  const [productInfo, setProductInfo] = useState();
  const { productID } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      const endPoint = `${ENDPOINTS.GET_PRODUCT_BY_ID}/${productID}`;
      const product = await httpRequest({}, endPoint);
      setProductInfo(product);
    }

    fetchProduct();
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Container>
          <div>{productID}</div>
        </Container>
      </Main>
      <Footer />
    </>
  );
}
