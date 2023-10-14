import styled from 'styled-components';

export const ProductPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Prices = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: var(--mahogany);

  span:nth-child(2) {
    font-size: var(--heading3-size);
  }

  span:first-child {
    font-size: var(--paragraph-size);
    margin-bottom: 1rem;
  }

  span:nth-child(3) {
    font-size: var(--paragraph-size);
    color: var(--gray);
    text-decoration: line-through;
    font-weight: normal;
  }
`;

export const Discount = styled.div`
  padding: 5px 8px;
  border-radius: 5px;
  background-color: var(--mahogany);
  color: var(--white);

  span {
    font-weight: bold;
  }
`;

export const PaymentMethods = styled.div`
  width: 100px;

  span {
    font-size: 1.4rem;
    font-weight: bold;
    color: var(--gray);
    overflow: hidden;
  }
`;
