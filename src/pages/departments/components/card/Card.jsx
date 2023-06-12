import { formatCurrency } from '../../../../utils/formatCurrency';
import { Slide, SlideImage, SlidePrice } from './Card.styled';

export default function Card({ product }) {
  const currency = formatCurrency(product.price);

  return (
    <>
      <Slide>
        <SlideImage>
          <img src={product.image} alt={product.title} />
        </SlideImage>
        <h3>{product.title}</h3>
        <SlidePrice>
          <span>{currency}</span>
        </SlidePrice>
        <button>
          <span>Add</span>
        </button>
      </Slide>
    </>
  );
}
