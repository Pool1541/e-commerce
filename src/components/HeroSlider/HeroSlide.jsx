import { Slide, SlideImage, SlidePrice } from './HeroSlide.styled';
import BagIcon from '../../assets/icons/Bag.icon';
import useBasket from '../../hooks/useBasket';
import { toast } from 'sonner';
import { formatCurrency } from '../../utils';

export default function HeroSlide({ product }) {
  const { addToBasket } = useBasket();
  let { title, brand, price, image } = product;
  price = formatCurrency(price);

  function addProduct(successMessage) {
    addToBasket({
      id: product.id,
      title: product.title,
      name: product.title,
      image: product.image,
      brand: product.brand,
      price: product.price,
      discount: product.discount,
    });
    if (successMessage) {
      toast.success(successMessage);
    }
  }

  return (
    <Slide>
      <h3>{brand}</h3>
      <p>{title}</p>
      <SlideImage>
        <img src={image} alt={title} />
      </SlideImage>
      <SlidePrice>
        <span>{price}</span>
        <span>{price}</span>
      </SlidePrice>
      <button onClick={() => addProduct('Se ha agregado el producto a tu canasta')}>
        <span>Add</span>
        <hr />
        <BagIcon />
      </button>
    </Slide>
  );
}
