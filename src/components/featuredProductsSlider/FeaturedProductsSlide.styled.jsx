import styled from 'styled-components';
import BREAKPOINTS from '../../assets/styles/breakPoints';

export const FPSlide = styled.div`
  color: black;
  background-color: var(--white);
  width: 100%;
  max-width: 180px;
  height: 100%;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;

  img {
    max-width: 100px;
    @media screen and (${BREAKPOINTS.TABLET_M}) {
      max-width: 80px;
    }
  }

  p {
    font-size: 1.3rem;
    text-align: center;
    @media screen and (${BREAKPOINTS.TABLET_M}) {
      font-size: 1.2rem;
    }
  }
`;
