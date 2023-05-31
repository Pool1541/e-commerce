import styled from 'styled-components';
import BREAKPOINTS from '../../assets/styles/breakPoints';

export const BasketContainer = styled.div``;

export const StyledBasketIcon = styled.button`
  position: relative;
  svg {
    width: 33px;
    height: 33px;
    color: var(--mahogany);
    transition: color 0.2s ease;

    &:hover {
      color: #eb906d;
    }

    @media screen and (${BREAKPOINTS.MOVIL_L}) {
      width: 28px;
      height: 28px;
    }
  }
`;

export const QuantityNotification = styled.div`
  position: absolute;
  top: 0px;
  right: -5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: var(--gray);
  border-radius: 50%;

  @media screen and (${BREAKPOINTS.MOVIL_L}) {
    width: 17px;
    height: 17px;
  }

  span {
    font-size: 1.2rem;
    color: var(--white);
    font-weight: 600;

    @media screen and (${BREAKPOINTS.MOVIL_L}) {
      font-size: 1rem;
      padding: 0 0 2px 0;
    }
  }
`;
