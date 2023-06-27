import { ProductBody, ProductBodyRight, ProductHeader } from '../../Product.styled';
import ProductButtons from '../productButtons/ProductButtons';
import ProductFeatures from '../productFeatures/ProductFeatures';
import ProductPrice from '../productPrice/ProductPrice';
import ProductQuantity from '../productQuantity/ProductQuantity';
import { ProductContentContainer } from './ProductContent.styled';

export default function ProductContent({ product }) {
  return (
    <ProductContentContainer>
      <ProductHeader>
        <h3>{product.brand}</h3>
        <h1>{product.title}</h1>
      </ProductHeader>
      <ProductBody>
        <ProductFeatures />
        <ProductBodyRight>
          <ProductPrice product={product} />
          <ProductQuantity />
          <ProductButtons product={product} />
        </ProductBodyRight>
      </ProductBody>
    </ProductContentContainer>
  );
}
