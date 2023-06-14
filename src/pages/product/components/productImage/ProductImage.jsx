import { ProductImageContainer } from './ProductImage.styled';

export default function ProductImage({ image, title }) {
  return (
    <ProductImageContainer>
      <img src={image} alt={title} />
    </ProductImageContainer>
  );
}
