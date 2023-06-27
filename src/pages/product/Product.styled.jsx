import styled from 'styled-components';
import BREAKPOINTS from '../../assets/styles/breakPoints';

export const ContainerProduct = styled.div`
  display: flex;
  margin-bottom: 5rem;

  @media screen and (${BREAKPOINTS.TABLET_L}) {
    flex-direction: column;
  }
`;

export const ProductHeader = styled.div`
  padding-bottom: 10px;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ccc;

  h1 {
    font-size: 1.8rem;
    font-weight: 400;
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 2.5rem;
    text-transform: lowercase;

    &::first-letter {
      text-transform: uppercase;
    }
  }
`;

export const ProductBody = styled.div`
  display: flex;
  gap: 1.5rem;

  @media screen and (${BREAKPOINTS.LAPTOP_L}) {
    flex-direction: column-reverse;
  }
`;

export const ProductBodyLeft = styled.div`
  width: 50%;
`;

export const ProductBodyRight = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 315px;

  @media screen and (${BREAKPOINTS.LAPTOP_L}) {
    flex: none;
  }
`;
