import { BagIcon } from '../../../../assets/icons';
import { Slide, SlideImage, SlidePrice } from './DepaSlide.styled';

export default function Card({ product }) {
  return (
    <>
      <Slide>
        <SlideImage>
          <img src={product.image} alt={product.title} />
        </SlideImage>
        <h3>{product.title}</h3>
        <SlidePrice>
          <span>$ {product.price}</span>
        </SlidePrice>
        <button>
          <span>Add</span>
        </button>
      </Slide>
    </>
  );
}
