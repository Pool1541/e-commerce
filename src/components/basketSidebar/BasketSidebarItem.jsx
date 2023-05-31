import { CloseIcon, DashIcon, PlusIcon } from '../../assets/icons';
import useBasket from '../../hooks/useBasket';
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
            <h3>{title}</h3>
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
            S/ <span>{price}</span>
          </div>
        </BasketSidebarItemFooter>
      </BasketSidebarItemInfo>
    </BasketSidebarItemContainer>
  );
}
