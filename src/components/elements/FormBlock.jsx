import styled from 'styled-components';
import BREAKPOINTS from '../../assets/styles/breakPoints';

export const FormBlock = styled.section`
  color: var(--p-color);
  display: flex;
  gap: 3rem;
  justify-content: space-between;
  padding: 5rem 1rem;

  @media screen and (${BREAKPOINTS.LAPTOP_M}) {
    flex-direction: column;
  }

  @media screen and (${BREAKPOINTS.MOVIL_L}) {
    padding: 3rem 0;
  }
`;
