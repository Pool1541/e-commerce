import styled from 'styled-components';

export const StyledPaymentMethod = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PaymentMethodInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const PaymentMethodLogo = styled.div`
  border-radius: 0.5rem;
  border: 1px solid var(--gray-light);
  padding: 0.5rem;
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaymentMethodCardNumber = styled.div`
  p {
    font-size: var(--paragraph-size);
  }
`;

export const PaymentMethodActions = styled.div`
  display: flex;
  align-items: center;

  button {
    padding: 1rem;
    color: var(--error);
    border-radius: 0.5rem;
    opacity: 0.7;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }
`;
