import styled from 'styled-components';

export const BasketSidebarItemContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 0;

  &:not(:last-child) {
    border-bottom: 1px solid var(--gray);
  }
`;

export const BasketSidebarItemImage = styled.div`
  width: 70px;
  height: 70px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const BasketSidebarItemInfo = styled.div`
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
