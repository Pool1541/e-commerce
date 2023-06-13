import styled from 'styled-components';
import BREAKPOINTS from '../../../../assets/styles/breakPoints';

export const Slide = styled.div`
  height: 300px;
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-weight: 700;
  position: relative;

  box-shadow: 1px 1px 10px 1px #00000013;
  border-radius: 25px;
  overflow: hidden;

  &:hover img {
    transform: scale(1.1);
  }

  &:hover {
    outline: 2px solid #00000036;
  }

  h3 {
    font-size: 1.3rem;
    text-transform: uppercase;
    text-align: center;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--p-color);
  }

  p {
    font-size: 1.5rem;
    padding: 0 20px;
    color: var(--p-color);
  }

  @media screen and (${BREAKPOINTS.MOVIL_L}) {
    height: 250px;
  }

  @media screen and (${BREAKPOINTS.MOVIL_S}) {
    height: 200px;
  }
`;

export const SlideImage = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    object-fit: contain;
    transition: transform 0.2s ease;
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
