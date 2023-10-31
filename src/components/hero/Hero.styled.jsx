import styled from 'styled-components';
import { Container } from '../elements/Container.styled';
import BREAKPOINTS from '../../assets/styles/breakPoints';

export const HeroContainer = styled(Container)`
  display: flex;
  gap: 30px;

  > div {
    height: 400px;
    border-radius: 15px;
    overflow: hidden;
    border: 2px solid #91919152;
  }
`;

export const Banner = styled.div`
  width: 80%;
  height: unset !important;
  max-height: 400px;
  flex: 1 1 auto;
  position: relative;
  border: none !important;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: -1;
  }

  h1 {
    color: var(--white);
    max-width: 400px;
  }
`;

export const BannerText = styled.div`
  width: 100%;
  height: 100%;
  max-width: 800px;
  padding: 30px 20px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: end;

  hr {
    margin: 20px 0;
  }

  @media screen and (${BREAKPOINTS.MOVIL_L}) {
    padding: 20px 15px;
  }
`;

export const FooterOfBanner = styled.div`
  display: flex;
  gap: 30px;
  padding: 0 0 20px 0;

  @media screen and (${BREAKPOINTS.MOVIL_L}) {
    gap: 10px;
    flex-direction: column-reverse;
    padding: 0;
    button {
      height: 35px;
    }
  }

  button {
    white-space: nowrap;
    padding: 2px 30px;
    background-color: var(--white);
    font-weight: 700;
    font-size: 1.3rem;
    border-radius: 20px;
    transition: all 0.2s ease;
  }

  button:hover {
    background-color: #dfdfdf;
  }

  p {
    color: var(--white);
  }
`;

export const Slider = styled.div`
  width: 20%;
  min-width: 230px;
  display: flex;

  @media screen and (${BREAKPOINTS.TABLET_L}) {
    display: none;
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 1.5rem;
    color: var(--gray);
  }
`;
