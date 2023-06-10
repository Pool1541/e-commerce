import { Grid } from './GridContainer.styled';
import { useContext, useEffect, useState } from 'react';
import { FilterContext } from '../../../../context/FilterContext';
import { buildQuery } from '../../../../utils';
import { API_URL, ENDPOINTS } from '../../../../config';
import Card from '../card/Card';

export default function GridContainer() {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const { filters } = useContext(FilterContext);

  useEffect(() => {
    const abortController = new AbortController();
    async function getProducts() {
      try {
        const query = buildQuery(filters);
        const response = await fetch(`${API_URL}${ENDPOINTS.GET_PRODUCTS}${query}`, {
          signal: abortController.signal,
        });
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        if (error.name === 'AbortError') return;
      }
    }
    getProducts();

    return () => {
      abortController.abort();
    };
  }, [filters]);

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
