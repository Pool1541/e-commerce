import { Slide, SlideImage, SlidePrice } from './HeroSliderItem.styled';
import BagIcon from '../../assets/icons/Bag.icon';
import useBasket from '../../hooks/useBasket';

export default function HeroSlide({ product }) {
  const { addToBasket } = useBasket();
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
      <button
        onClick={() =>
          addToBasket({
            id: product.id,
            title: product.name,
            name: product.name,
            image: product.image,
            brand: product.brand,
            price: product.regular_price,
          })
        }>
        <span>Add</span>
        <hr />
        <BagIcon />
      </button>
    </Slide>
  );
}
