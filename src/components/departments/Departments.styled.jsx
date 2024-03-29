import styled, { css } from 'styled-components';
import BREAKPOINTS from '../../assets/styles/breakPoints';

export const GridItemContainerMixin = css`
  height: 200px;
  border-radius: 25px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (${BREAKPOINTS.TABLET_M}) {
    height: 150px;
  }
`;

export const GridItemContainer = styled.div`
  ${GridItemContainerMixin}
`;

export const GridItemImage = styled.div`
  height: 100px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(3px 3px 5px #bd40064d);
  }
`;

export const GridItemTitle = styled.div`
  color: var(--mahogany);
  margin-top: 2rem;

  h3 {
    text-align: center;
    font-size: 1.6rem;

    @media screen and (${BREAKPOINTS.MOVIL_L}) {
      font-size: 1.4rem;
    }
  }
`;
