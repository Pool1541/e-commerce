import styled from 'styled-components';
import BREAKPOINTS from '../../assets/styles/breakPoints';

export const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: space-around;
  gap: 20px;

  @media screen and (${BREAKPOINTS.TABLET_M}) {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media screen and (${BREAKPOINTS.MOVIL_M}) {
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  }
`;
