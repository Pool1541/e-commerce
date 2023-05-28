import { BasketIcon } from '../../assets/icons';
import useOutsideClick from '../../hooks/useOutsideClick';
import {
  BasketSidebarContainer,
  BasketSidebarBackground,
  BasketCloseButton,
  BasketSidebarHeader,
  StyledBasketIcon,
  BasketSidebarTitle,
} from './BasketSidebar.styled';

export default function BasketSidebar({ handleClose }) {
  const ref = useOutsideClick(handleClose);

  return (
    <BasketSidebarBackground>
      <BasketSidebarContainer ref={ref}>
        <BasketCloseButton onClick={handleClose}>x</BasketCloseButton>
        <BasketSidebarHeader>
          <StyledBasketIcon>
            <BasketIcon />
          </StyledBasketIcon>
          <BasketSidebarTitle>
            <h3>
              <span>3</span> productos agregados
            </h3>
            <div>
              <span>!</span>
              <span>Tu carrito está listo para ir a pagar</span>
            </div>
          </BasketSidebarTitle>
        </BasketSidebarHeader>
        <main>
          <div>Producto 1</div>
          <div>Producto 2</div>
        </main>
        <footer></footer>
      </BasketSidebarContainer>
    </BasketSidebarBackground>
  );
}
