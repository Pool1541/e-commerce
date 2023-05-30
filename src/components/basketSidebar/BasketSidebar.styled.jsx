import styled, { keyframes } from 'styled-components';
import BREAKPOINTS from '../../assets/styles/breakPoints';

const translateIn = keyframes`
  to {
    transform: translateX(0);
  }
`;

const opacityIn = keyframes`
  to {
    opacity: 1;
  }
`;

const translateOut = keyframes`
  to {
    transform: translateX(100%);
  };
`;

export const BasketSidebarBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 200;
  background-color: #00000044;
  opacity: 0;
  animation: ${opacityIn} 0.2s ease forwards;
`;

export const BasketSidebarContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 380px;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transform: translateX(100%);
  animation: ${translateIn} 0.5s ease forwards;

  @media screen and (${BREAKPOINTS.MOVIL_L}) {
    max-width: unset;
  }
`;

export const BasketCloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 10px;
  color: var(--mahogany);
  font-size: 2.5rem;
  font-weight: 400;
  transition: color 0.2s ease;

  &:hover {
    color: #eb906d;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const BasketSidebarHeader = styled.header`
  width: 90%;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StyledBasketIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  box-shadow: 1px 1px 5px 1px #24242426;
  svg {
    width: 33px;
    height: 33px;
    color: var(--mahogany);
    transition: color 0.2s ease;

    @media screen and (${BREAKPOINTS.MOVIL_L}) {
      width: 28px;
      height: 28px;
    }
  }
`;

export const BasketSidebarTitle = styled.div`
  h3 {
    margin-bottom: 5px;
    font-size: 2rem;

    span {
      font-size: 1.7rem;
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--mahogany);
    border-radius: 5px;
    padding: 5px 10px;
    gap: 5px;
    background-color: var(--snow);

    span:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: 2px solid var(--mahogany);
      color: var(--mahogany);
      font-weight: 700;
      font-size: 1rem;
      padding: 0 0 2px 0;
    }

    span {
      font-size: 1.3rem;
      font-weight: 700;
    }
  }
`;

export const BasketSidebarBody = styled.div`
  flex: 1 1 auto;
  padding: 0 20px;
  overflow: auto;
`;

export const BasketSidebarFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 60px;
  background-color: var(--gray);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span {
    color: var(--white);
    font-weight: 600;
  }

  button {
    margin-top: 10px;
  }
`;
