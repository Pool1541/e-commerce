import styled, { keyframes } from 'styled-components';
import BREAKPOINTS from '../../../../assets/styles/breakPoints';

const sideIn = keyframes`
  to {
    transform: translateX(0);
  }
`;

export const FiltersBackdrop = styled.div`
  display: none;
  @media screen and (${BREAKPOINTS.TABLET_L}) {
    display: ${({ open }) => (open ? 'block' : 'none')};
    background-color: #0000001a;
    position: fixed;
    z-index: 2999;
    height: 100vh;
    width: 100%;
    top: 0;
    right: 0;
  }
`;

export const StyledFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 200px;
  max-width: 200px;

  @media screen and (${BREAKPOINTS.TABLET_L}) {
    position: fixed;
    top: 0;
    right: 0;
    padding: 50px 20px;
    z-index: 3000;
    background-color: var(--white);
    height: 100vh;
    width: 80%;
    max-width: 350px;
    transition: transform 0.3s ease;
    transform: translateX(100%);
    animation: ${sideIn} 0.3s forwards;
  }
`;

export const StyledFilters = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: ${({ open }) => (open ? '180px' : '3rem')};
  transition: all 0.2s linear;

  > div {
    overflow-y: auto;
    overflow-x: hidden;
    transition: all 0.2s linear;

    ::-webkit-scrollbar {
      -webkit-appearance: none;
    }
  }

  button {
    display: flex;
    justify-content: space-between;

    span {
      transition: transform 0.3s ease;
      transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
    }
  }

  h4 {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  label {
    text-transform: lowercase;

    &::first-letter {
      text-transform: uppercase;
    }
  }
`;

export const FilterRange = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    width: 70px;
    border-radius: 5px;
    background-color: #00000075;
    color: var(--white);
    padding: 5px;
    align-self: flex-end;
  }
`;
