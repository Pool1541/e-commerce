import styled from 'styled-components';

export const ProductButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    width: 50%;
    padding: 10px 0;
  }

  button:last-child {
    background: var(--white);
    color: var(--mahogany);
    border: 1px solid var(--mahogany);
  }
`;

export const ButtonBuy = styled.button``;
