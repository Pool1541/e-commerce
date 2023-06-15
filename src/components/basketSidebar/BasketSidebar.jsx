import { BasketIcon, CloseIcon } from '../../assets/icons';
import useOutsideClick from '../../hooks/useOutsideClick';
import { formatCurrency } from '../../utils';
import { Button } from '../elements';
import {
  BasketSidebarContainer,
  BasketSidebarBackground,
  BasketCloseButton,
  BasketSidebarHeader,
  StyledBasketIcon,
  BasketSidebarTitle,
  BasketSidebarBody,
  BasketSidebarFooter,
  BasketEmpty,
} from './BasketSidebar.styled';
import BasketSidebarItem from './BasketSidebarItem';
import useLockedBody from '../../hooks/useLockedBody';

export default function BasketSidebar({ isOpen, handleClose, basket }) {
  const ref = useOutsideClick(handleClose);
  useLockedBody(isOpen);

  if (basket.products.length === 0)
    return (
      <BasketSidebarBackground>
        <BasketSidebarContainer ref={ref}>
          <BasketCloseButton onClick={handleClose}>
            <CloseIcon />
          </BasketCloseButton>
          <BasketEmpty>
            <BasketIcon />
            <p>Basket is empty</p>
          </BasketEmpty>
        </BasketSidebarContainer>
      </BasketSidebarBackground>
    );

  return (
    <BasketSidebarBackground>
      <BasketSidebarContainer ref={ref}>
        <BasketCloseButton onClick={handleClose}>
          <CloseIcon />
        </BasketCloseButton>
        <BasketSidebarHeader>
          <StyledBasketIcon>
            <BasketIcon />
          </StyledBasketIcon>
          <BasketSidebarTitle>
            <h3>
              <span>{basket.quantity}</span> productos agregados
            </h3>
            <div>
              <span>!</span>
              <span>Tu canasta está lista para ir a pagar</span>
            </div>
          </BasketSidebarTitle>
        </BasketSidebarHeader>
        <BasketSidebarBody>
          {basket.products.map(({ id, image, title, brand, price, quantity }) => (
            <BasketSidebarItem
              id={id}
              brand={brand}
              image={image}
              price={price}
              title={title}
              quantity={quantity}
              key={id}
            />
          ))}
        </BasketSidebarBody>
        <BasketSidebarFooter>
          <div>
            <span>Subtotal</span>
            <span>{formatCurrency(basket.subTotal)}</span>
          </div>
          <div>
            <span>Descuentos</span>
            <span>- {formatCurrency(basket.discounts)}</span>
          </div>
          <hr />
          <div>
            <span>Total</span>
            <span>{formatCurrency(basket.total)}</span>
          </div>
          <Button>Finalizar pedido</Button>
        </BasketSidebarFooter>
      </BasketSidebarContainer>
    </BasketSidebarBackground>
  );
}
