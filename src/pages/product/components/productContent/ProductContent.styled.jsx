import styled from 'styled-components';
import BREAKPOINTS from '../../../../assets/styles/breakPoints';

export const ProductContentContainer = styled.div`
  width: 50%;

  @media screen and (${BREAKPOINTS.TABLET_L}) {
    width: 100%;
  }
`;
