import { Slide, SlideImage, SlidePrice } from './HeroSliderItem.styled';
import BagIcon from '../../assets/icons/Bag.icon';

export default function HeroSlide({ product }) {
  return (
    <Slide>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <SlideImage>
        <img src={product.image} alt={product.name} />
      </SlideImage>
      <SlidePrice>
        <span>2 for ${product.regular_price}</span>
        <span>2 for ${product.sale_price}</span>
      </SlidePrice>
      <button>
        <span>Add</span>
        <hr />
        <BagIcon />
      </button>
    </Slide>
  );
}
