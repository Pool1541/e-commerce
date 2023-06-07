import styled from 'styled-components';
import BREAKPOINTS from '../../../../assets/styles/breakPoints';

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  gap: 3rem;
  @media screen and (${BREAKPOINTS.MOVIL_L}) {
    width: 100%;
  }
`;
