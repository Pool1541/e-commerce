import { Grid } from './GridContainer.styled';
import { useContext, useEffect, useState } from 'react';
import { FilterContext } from '../../../../context/FilterContext';
import Card from '../card/Card';

export default function GridContainer() {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const { filters } = useContext(FilterContext);
  console.log(filters);

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
    <Grid>
      {products.products.map((product) => (
        <Card key={product._id} product={product} />
      ))}
    </Grid>
  );
}
