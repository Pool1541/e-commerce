import { ProductButtonsContainer } from './ProductButtons.styled';
import { Button } from '../../../../components/elements';
import useBasket from '../../../../hooks/useBasket';

export default function ProductButtons({ product }) {
  const { addToBasket } = useBasket();

  function addProduct() {
    addToBasket({
      id: product.id,
      title: product.title,
      name: product.title,
      image: product.image,
      brand: product.brand,
      price: product.price,
      discount: product.discount,
    });
  }

  return (
    <ProductButtonsContainer>
      <Button onClick={addProduct}>Agregar al carrito</Button>
      <Button>Comprar</Button>
    </ProductButtonsContainer>
  );
}
