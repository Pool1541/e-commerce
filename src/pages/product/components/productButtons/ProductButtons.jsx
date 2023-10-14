import { ProductButtonsContainer } from './ProductButtons.styled';
import { Button } from '../../../../components/elements';

export default function ProductButtons({ addProduct }) {
  return (
    <ProductButtonsContainer>
      <Button onClick={addProduct}>Agregar al carrito</Button>
      <Button>Comprar</Button>
    </ProductButtonsContainer>
  );
}
