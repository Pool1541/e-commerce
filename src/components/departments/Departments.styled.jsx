import styled from 'styled-components';
import BREAKPOINTS from '../../assets/styles/breakPoints';

export const GridItemContainer = styled.div`
  height: 200px;
  border-radius: 25px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 2px solid rgba(145, 145, 145, 0.32);

  @media screen and (${BREAKPOINTS.TABLET_M}) {
    height: 150px;
  }
`;

export const GridItemImage = styled.div`
  width: 150px;
  height: 100px;

  @media screen and (${BREAKPOINTS.TABLET_M}) {
    width: 100px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(3px 3px 5px #bd40064d);
  }
`;

export const GridItemTitle = styled.div`
  color: var(--mahogany);

  h3 {
    font-size: 1.8rem;

    @media screen and (${BREAKPOINTS.MOVIL_L}) {
      margin-top: 1rem;
      font-size: 1.5rem;
    }
  }
`;
