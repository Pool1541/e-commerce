import { Link } from 'react-router-dom';
import { CloseIcon, DashIcon, PlusIcon } from '../../assets/icons';
import useBasket from '../../hooks/useBasket';
import { formatCurrency } from '../../utils';
import {
  BasketSidebarItemContainer,
  BasketSidebarItemFooter,
  BasketSidebarItemHeader,
  BasketSidebarItemImage,
  BasketSidebarItemInfo,
} from './BasketSidebarItem.styled';

export default function BasketSidebarItem({ image, title, brand, price, quantity, id }) {
  const { removeFromBasket, decreaseQuantity, addToBasket } = useBasket();

  return (
    <BasketSidebarItemContainer>
      <BasketSidebarItemImage>
        <img src={image} alt={title} />
      </BasketSidebarItemImage>
      <BasketSidebarItemInfo>
        <BasketSidebarItemHeader>
          <div>
            <p>{brand}</p>
            <h3>
              <Link to={`/product/${id}`}>{title}</Link>
            </h3>
          </div>
          <div>
            <button onClick={() => removeFromBasket({ id, quantity })}>
              <CloseIcon />
            </button>
          </div>
        </BasketSidebarItemHeader>
        <BasketSidebarItemFooter>
          <div>
            <button onClick={() => decreaseQuantity({ id })}>
              <DashIcon />
            </button>
            <span>{quantity}</span>
            <button onClick={() => addToBasket({ id })}>
              <PlusIcon />
            </button>
          </div>
          <div>
            <span>{formatCurrency(price)}</span>
          </div>
        </BasketSidebarItemFooter>
      </BasketSidebarItemInfo>
    </BasketSidebarItemContainer>
  );
}
