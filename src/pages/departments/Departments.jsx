import { useEffect, useState } from 'react';

import Card from './components/card/Card';
import Header from '../../components/header/Header';
import { Container, Main } from '../../components/elements';
import Footer from '../../components/footer/Footer';
import GridContainer from './components/gridContainer/GridContainer';

export default function Departments() {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch('https://e-commerce-api-express.up.railway.app/api/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    }
    getProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <Main>
        <Container>
          <GridContainer>
            {products.products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </GridContainer>
        </Container>
      </Main>
      <Footer />
    </>
  );
}
