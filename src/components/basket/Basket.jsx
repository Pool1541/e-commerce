import { BasketContainer, StyledBasketIcon, QuantityNotification } from './Basket.styled';
import { BasketIcon } from '../../assets/icons';
import { useState } from 'react';
import BasketSidebar from '../basketSidebar/BasketSidebar';

export default function Basket() {
  const [basketIsOpen, setBasketIsOpen] = useState(false);

  function handleToggleSidebar() {
    setBasketIsOpen((prevState) => !prevState);
  }

  return (
    <BasketContainer>
      <StyledBasketIcon onClick={handleToggleSidebar}>
        <BasketIcon />
        <QuantityNotification>
          <span>5</span>
        </QuantityNotification>
      </StyledBasketIcon>
      {basketIsOpen && <BasketSidebar handleClose={handleToggleSidebar} />}
    </BasketContainer>
  );
}
