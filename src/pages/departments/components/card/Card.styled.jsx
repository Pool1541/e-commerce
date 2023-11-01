import styled, { css } from 'styled-components';
import BREAKPOINTS from '../../../../assets/styles/breakPoints';
import { Link } from 'react-router-dom';
import { Button } from '../../../../components/elements';

export const CardContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-weight: 700;
  position: relative;
  box-shadow: 1px 1px 10px 1px #00000013;
  border-radius: 25px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 1px 1px 10px 1px #0000003b;
  }

  &:hover img {
    transform: scale(1.1);
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
`;

export const CardLink = styled(Link)`
  height: 90%;
  max-height: 263px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (${BREAKPOINTS.MOVIL_L}) {
    max-height: 213px;
  }
`;

export const CardImage = styled.div`
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

export const CardPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  color: var(--mahogany);

  span:nth-child(2) {
    color: var(--gray);
    text-decoration: line-through;
  }
`;

export const AddButton = styled(Button)`
  width: 100%;
  border-radius: 0;

  @media screen and (${BREAKPOINTS.MOVIL_S}) {
    font-size: 1.3rem;
  }
`;
