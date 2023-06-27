import styled from 'styled-components';
import BREAKPOINTS from '../../../../assets/styles/breakPoints';

export const ProductImageContainer = styled.div`
  width: 45%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (${BREAKPOINTS.TABLET_L}) {
    width: 100%;
    height: 200px;
  }

  img {
    width: 90%;
    height: 100%;
    object-fit: contain;
  }
`;
