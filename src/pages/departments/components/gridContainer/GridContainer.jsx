import Card from '../card/Card';
import useProduct from '../../../../hooks/useProducts';
import { Grid } from './GridContainer.styled';
import SkeletonCard from '../card/SkeletonCard';

export default function GridContainer() {
  const { products, loading } = useProduct();

  if (loading)
    return (
      <Grid>
        {Array.from({ length: 20 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </Grid>
    );

  return (
    <Grid>
      {products.products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </Grid>
  );
}
