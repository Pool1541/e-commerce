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
  height: 100dvh;
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

  @media screen and (${BREAKPOINTS.MOVIL_S}) {
    padding: 15px 5px;
  }
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

  @media screen and (${BREAKPOINTS.MOVIL_S}) {
    border-radius: 0;
    width: unset;
    height: unset;
    box-shadow: none;
  }

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
      font-size: 1.2rem;
      white-space: nowrap;
      font-weight: 700;
    }
  }
`;

export const BasketSidebarBody = styled.div`
  width: 100%;
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

  @media screen and (${BREAKPOINTS.MOVIL_S}) {
    padding: 10px 50px;
    gap: 5px;
  }

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

    @media screen and (${BREAKPOINTS.MOVIL_S}) {
      margin-top: 5px;
    }
  }
`;

export const BasketEmpty = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  svg {
    width: 40px;
    height: 40px;
  }

  p {
    font-size: 2rem;
  }
`;
