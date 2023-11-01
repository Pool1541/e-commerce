import { formatCurrency } from '../../../../utils/formatCurrency';
import { CardContainer, CardImage, CardPrice, CardLink, AddButton } from './Card.styled';
import { PUBLIC_ROUTES } from '../../../../config';
import { toast } from 'sonner';
import useBasket from '../../../../hooks/useBasket';

export default function Card({ product }) {
  const currency = formatCurrency(product.price);

  const { addToBasket } = useBasket();

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
    <CardContainer>
      <CardLink to={`${PUBLIC_ROUTES.PRODUCT}/${product.id}`}>
        <CardImage>
          <img src={product.image} alt={product.title} />
        </CardImage>
        <h3>{product.title}</h3>
        <CardPrice>
          <span>{currency}</span>
        </CardPrice>
      </CardLink>
      <AddButton onClick={() => addProduct('Se ha agregado el producto a tu canasta')}>
        Agregar al carrito
      </AddButton>
    </CardContainer>
  );
}
