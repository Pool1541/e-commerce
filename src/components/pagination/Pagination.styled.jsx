import styled from 'styled-components';
import BREAKPOINTS from '../../assets/styles/breakPoints';

export const StyledPaginationContainer = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (${BREAKPOINTS.MOVIL_L}) {
    justify-content: center;
  }

  ul {
    width: 100%;
    max-width: 300px;
    display: flex;
    justify-content: space-around;
    gap: 0.5rem;

    @media screen and (${BREAKPOINTS.MOVIL_L}) {
      max-width: unset;
    }
  }
`;

export const PaginationButton = styled.button`
  color: ${({ current }) => (current ? 'var(--mahogany)' : 'var(--mahogany800)')};
  font-weight: ${({ current }) => (current ? '600' : '400')};
  letter-spacing: 1px;

  &:disabled {
    color: var(--gray);
    cursor: default;

    &:hover {
      background: unset;
      color: var(--gray);
    }
  }

  &:hover {
    color: var(--mahogany);
  }
`;
