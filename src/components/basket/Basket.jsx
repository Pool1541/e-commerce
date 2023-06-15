import { BasketContainer, StyledBasketIcon, QuantityNotification } from './Basket.styled';
import { BasketIcon } from '../../assets/icons';
import { useState } from 'react';
import BasketSidebar from '../basketSidebar/BasketSidebar';
import useBasket from '../../hooks/useBasket';

export default function Basket() {
  const { basket } = useBasket();
  const [basketIsOpen, setBasketIsOpen] = useState(false);

  function handleToggleSidebar() {
    setBasketIsOpen((prevState) => !prevState);
  }

  return (
    <BasketContainer>
      <StyledBasketIcon onClick={handleToggleSidebar}>
        <BasketIcon />
        {basket.quantity > 0 && (
          <QuantityNotification>
            <span>{basket.quantity}</span>
          </QuantityNotification>
        )}
      </StyledBasketIcon>
      {basketIsOpen && (
        <BasketSidebar isOpen={basketIsOpen} handleClose={handleToggleSidebar} basket={basket} />
      )}
    </BasketContainer>
  );
}
