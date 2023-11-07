import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils';
import { Slide, SlideImage, SlidePrice } from '../HeroSlider/HeroSlide.styled';
import { PUBLIC_ROUTES } from '../../config';

export default function FeaturedProductsSlide({ product }) {
  let { title, brand, price, image, id } = product;
  price = formatCurrency(price);

  return (
    <Slide>
      <h3>{brand}</h3>
      <Link to={`${PUBLIC_ROUTES.PRODUCT}/${id}`}>{title}</Link>
      <SlideImage>
        <img src={image} alt={title} />
      </SlideImage>
      <SlidePrice>
        <span>{price}</span>
        <span>{price}</span>
      </SlidePrice>
    </Slide>
  );
}
