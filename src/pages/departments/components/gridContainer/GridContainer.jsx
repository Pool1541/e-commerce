import Card from '../card/Card';
import useProduct from '../../../../hooks/useProducts';
import { Grid } from './GridContainer.styled';

export default function GridContainer() {
  const { products, loading, error } = useProduct();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Grid>
      {products.products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </Grid>
  );
}
