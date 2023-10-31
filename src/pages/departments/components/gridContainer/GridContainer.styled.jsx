import styled from 'styled-components';
import BREAKPOINTS from '../../../../assets/styles/breakPoints';

export const Grid = styled.div`
  width: 100%;
  min-height: calc(100vh - 16.5rem);
  display: grid;
  grid-template-columns: repeat(5, minmax(150px, 1fr));
  gap: 2rem;

  @media screen and (${BREAKPOINTS.LAPTOP_L}) {
    grid-template-columns: repeat(4, minmax(150px, 1fr));
  }

  @media screen and (${BREAKPOINTS.LAPTOP_M}) {
    grid-template-columns: repeat(3, minmax(150px, 1fr));
  }

  @media screen and (${BREAKPOINTS.TABLET_M}) {
    gap: 1rem;
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }

  @media screen and (${BREAKPOINTS.MOVIL_L}) {
    width: 100%;
  }
`;
