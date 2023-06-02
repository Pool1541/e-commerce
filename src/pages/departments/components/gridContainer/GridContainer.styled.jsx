import styled from 'styled-components';
import BREAKPOINTS from '../../../../assets/styles/breakPoints';

export const Grid = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 150px));
  gap: 1rem;
  @media screen and (${BREAKPOINTS.MOVIL_L}) {
    width: 100%;
  }
`;
