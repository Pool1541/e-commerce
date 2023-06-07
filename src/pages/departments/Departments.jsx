import { useEffect, useState } from 'react';

import Card from './components/card/Card';
import Header from '../../components/header/Header';
import { Container, Main } from '../../components/elements';
import Footer from '../../components/footer/Footer';
import GridContainer from './components/gridContainer/GridContainer';
import FilterContainer from './components/filters/FilterContainer';
import FilterContextProvider from '../../context/FilterContext';
import { DepartmentsContainer } from './Departments.styled';

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
    <FilterContextProvider>
      <Header />
      <Main>
        <DepartmentsContainer>
          <FilterContainer />
          <GridContainer>
            {products.products.map((product) => (
              <Card key={product._id} product={product} />
            ))}
          </GridContainer>
        </DepartmentsContainer>
      </Main>
      <Footer />
    </FilterContextProvider>
  );
}
