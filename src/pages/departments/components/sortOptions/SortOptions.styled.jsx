import styled, { css, keyframes } from 'styled-components';

const dropDown = keyframes`
  0% {
    transform: translateY(-20%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const StyledSortOptions = styled.div`
  width: 15rem;
  background-color: var(--white);
  position: absolute;
  top: 110%;
  right: 0;
  z-index: 1000;
  border-radius: 0.5rem;
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid var(--gray-light);
  opacity: 0;
  animation: ${dropDown} 0.3s ease 0s 1 forwards;

  button {
    display: block;
    background-color: inherit;
    color: var(--p-color);
    text-align: left;
    width: 100%;
    font-size: 1.5rem;
    font-weight: 400;
    padding: 1.5rem;
    transition: background 0.2s ease-in-out;

    &:hover {
      background-color: var(--gray-light);
    }
  }
`;
