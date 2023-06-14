import styled from 'styled-components';
import BREAKPOINTS from '../../assets/styles/breakPoints';

export const BasketSidebarItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 0;

  &:not(:last-child) {
    border-bottom: 1px solid var(--gray);
  }
`;

export const BasketSidebarItemImage = styled.div`
  width: 35%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BasketSidebarItemInfo = styled.div`
  width: 70%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

export const BasketSidebarItemHeader = styled.div`
  display: flex;
  justify-content: space-between;

  div:first-child {
    flex: 1 1 auto;
  }

  p {
    text-transform: uppercase;
    margin-bottom: 5px;
    font-size: 0.9rem;
    color: var(--gray);
  }

  h3 {
    width: 90%;
    font-size: 1.5rem;
    word-break: break-word;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  svg {
    width: 12px;
    height: 12px;
  }
`;

export const BasketSidebarItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div:first-child {
    width: 40%;
    min-width: 90px;
    border-radius: 25px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 5px 0;
    background-color: var(--snow);
    font-weight: 100;
    color: var(--black);

    button {
      display: flex;
    }

    button:first-child {
      color: red;
    }

    button:last-child {
      color: green;
    }
  }

  div {
    color: green;
    font-weight: 400;
  }
`;
