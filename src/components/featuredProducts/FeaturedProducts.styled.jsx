import styled from 'styled-components';
import BREAKPOINTS from '../../assets/styles/breakPoints';

export const FPContainer = styled.div`
  padding: 20px 40px;
  height: 430px;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  border: 2px solid rgba(145, 145, 145, 0.32);
  display: flex;
  flex-direction: column;

  @media screen and (${BREAKPOINTS.TABLET_M}) {
    padding: 15px;
    height: 350px;
  }

  > img {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.7);
    z-index: -1;
  }
`;

export const FPHeader = styled.div`
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;

  @media screen and (${BREAKPOINTS.TABLET_L}) {
    padding: 20px;
  }

  @media screen and (${BREAKPOINTS.MOVIL_L}) {
    padding: 10px 0 20px;
    justify-content: center;
  }

  h2 {
    margin-bottom: 0;
    white-space: nowrap;
    color: var(--snow);
  }

  button {
    background-color: var(--snow);
    color: var(--black);

    @media screen and (${BREAKPOINTS.TABLET_M}) {
      display: none;
    }
  }
`;

export const Slider = styled.div`
  /* height: 100%;
  max-height: 290px; */
  display: flex;
  flex: 1 1 auto;

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 3rem;
    color: var(--white);
  }
`;
