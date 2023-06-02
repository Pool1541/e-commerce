import styled from 'styled-components';
import BREAKPOINTS from '../../../../assets/styles/breakPoints';

export const Slide = styled.div`
  height: 200px;
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-weight: 700;
  position: relative;
  border: 1px solid var(--gray);
  border-radius: 25px;
  overflow: hidden;

  h3 {
    font-size: 1rem;

    color: var(--mahogany);
  }

  p {
    font-size: 1.5rem;
    padding: 0 20px;
    color: var(--p-color);
  }

  button {
    position: absolute;
    display: flex;
    top: 50%;
    bottom: 50%;
    width: 50%;
    height: 35px;
    padding: 5px 0;
    align-items: center;
    background-color: var(--mahogany);
    border-radius: 25px;
    color: var(--white);
    opacity: 0;
    transition: all 0.3s ease-in-out;

    @media screen and (${BREAKPOINTS.MOVIL_L}) {
      position: static;
      width: 50%;
      height: 20px;
      padding: 0px 0;
      opacity: 1;
      span {
        font-size: 0.9rem;
      }
    }
    span {
      flex: 1 1 auto;
    }
  }
  &:hover button {
    opacity: 1;
  }
`;

export const SlideImage = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;

  img {
    width: 100px;

    object-fit: contain;
  }
`;

export const SlidePrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  color: var(--mahogany);

  span:nth-child(2) {
    color: var(--gray);
    text-decoration: line-through;
  }
`;
