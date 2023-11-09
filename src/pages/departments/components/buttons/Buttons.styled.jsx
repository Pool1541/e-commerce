import styled from 'styled-components';
import BREAKPOINTS from '../../../../assets/styles/breakPoints';

export const StyledButtonsContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;

  button {
    min-width: 100px;
    background-color: var(--mahogany);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    span {
      font-size: 1.3rem;
      text-transform: uppercase;
    }
  }

  > button:first-child {
    display: none;

    @media screen and (${BREAKPOINTS.TABLET_L}) {
      display: flex;
    }
  }

  @media screen and (${BREAKPOINTS.TABLET_L}) {
    justify-content: center;
    max-width: 400px;
    margin: auto;

    button {
      width: 50%;
    }
  }
`;

export const StyledSortButtonContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover:last-child svg {
    transform: rotate(180deg);
  }

  @media screen and (${BREAKPOINTS.TABLET_L}) {
    width: 50%;

    button {
      width: 100%;
    }
  }
`;
