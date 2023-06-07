import styled from 'styled-components';

export const StyledFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledFilters = styled.form`
  display: flex;
  flex-direction: column;

  h4 {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
