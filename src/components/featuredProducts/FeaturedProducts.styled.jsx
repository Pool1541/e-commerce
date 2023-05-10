import styled from 'styled-components';

export const FPContainer = styled.div`
  padding: 20px 40px;
  height: 430px;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  border: 2px solid rgba(145, 145, 145, 0.32);

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

  h2 {
    margin-bottom: 0;
    color: var(--snow);
  }

  button {
    background-color: var(--snow);
    color: var(--black);
  }
`;

export const Slider = styled.div`
  height: 100%;
  max-height: 290px;
  display: flex;

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 3rem;
    color: var(--white);
  }
`;
