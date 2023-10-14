import { ProductBody, ProductBodyRight, ProductHeader } from '../../Product.styled';
import ProductButtons from '../productButtons/ProductButtons';
import ProductFeatures from '../productFeatures/ProductFeatures';
import ProductPrice from '../productPrice/ProductPrice';
import ProductQuantity from '../productQuantity/ProductQuantity';
import { ProductContentContainer } from './ProductContent.styled';
import useBasket from '../../../../hooks/useBasket';
import useQuantity from '../../../../hooks/useQuantity';

export default function ProductContent({ product }) {
  const { quantity, increment, decrement, set } = useQuantity(1);
  const { addToBasket } = useBasket();

  function addProduct() {
    addToBasket({
      ...product,
      quantity,
    });
  }

  return (
    <ProductContentContainer>
      <ProductHeader>
        <h3>{product.brand}</h3>
        <h1>{product.title}</h1>
      </ProductHeader>
      <ProductBody>
        <ProductFeatures features={product.features} />
        <ProductBodyRight>
          <ProductPrice product={product} />
          <ProductQuantity
            quantity={quantity}
            increment={increment}
            decrement={decrement}
            set={set}
          />
          <ProductButtons addProduct={addProduct} />
        </ProductBodyRight>
      </ProductBody>
    </ProductContentContainer>
  );
}
