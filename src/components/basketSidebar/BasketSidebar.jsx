import { BasketIcon, CloseIcon } from '../../assets/icons';
import useBasket from '../../hooks/useBasket';
import useOutsideClick from '../../hooks/useOutsideClick';
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
} from './BasketSidebar.styled';
import BasketSidebarItem from './BasketSidebarItem';

export default function BasketSidebar({ handleClose }) {
  const { basket } = useBasket();
  // Se ejecuta el handleClose inmediatamente cuando se renderiza el componente y por eso se cierra
  const ref = useOutsideClick(handleClose);

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
              <span>5</span> productos agregados
            </h3>
            <div>
              <span>!</span>
              <span>Tu carrito está listo para ir a pagar</span>
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
            <span>S/ 169.90</span>
          </div>
          <div>
            <span>Descuentos</span>
            <span>-S/ 20.00</span>
          </div>
          <hr />
          <div>
            <span>Total</span>
            <span>S/ 149.90</span>
          </div>
          <Button>Finalizar pedido</Button>
        </BasketSidebarFooter>
      </BasketSidebarContainer>
    </BasketSidebarBackground>
  );
}