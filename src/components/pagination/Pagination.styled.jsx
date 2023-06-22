import styled from 'styled-components';

export const StyledPaginationContainer = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ul {
    display: flex;
    gap: 0.2rem;
  }
`;

export const PaginationButton = styled.button`
  border-radius: 5px;
  padding: 10px 15px;
  background: ${({ current }) => (current ? 'var(--tea-rose)' : 'var(--snow)')};
  transition: background 0.2s ease;
  color: var(--p-color);

  &:disabled {
    background: var(--gray);
    color: var(--snow);
    cursor: default;

    &:hover {
      background: var(--gray);
      color: var(--snow);
    }
  }

  &:hover {
    background: var(--tea-rose);
  }
`;
