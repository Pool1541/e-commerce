import Card from '../card/Card';
import useProduct from '../../../../hooks/useProducts';
import SkeletonCard from '../card/SkeletonCard';
import { Grid } from './GridContainer.styled';

export default function GridContainer() {
  const { products, loading } = useProduct();

  const SkeletonCards = Array.from({ length: 20 }).map((_, index) => <SkeletonCard key={index} />);

  return (
    <Grid>
      {loading
        ? SkeletonCards
        : products.products.map((product) => <Card key={product.id} product={product} />)}
    </Grid>
  );
}
