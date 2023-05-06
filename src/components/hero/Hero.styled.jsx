import styled from 'styled-components';
import { Container } from '../elements/Container.styled';

const HeroSection = styled.section`
  padding: 30px 0 50px 0;
`;

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
  flex: 1 1 auto;
  position: relative;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.6);
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
`;

export const FooterOfBanner = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px 0;

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

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 1.5rem;
    color: var(--gray);
  }
`;

export default HeroSection;
