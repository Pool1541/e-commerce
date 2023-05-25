import styled, { keyframes } from 'styled-components';

const show = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const ProfileOptionsContainer = styled.div`
  user-select: auto;
  border: 1px solid var(--tea-rose);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  top: 57px;
  right: 0;
  background-color: var(--white);
  padding: 15px;
  width: 300px;
  height: 150px;
  border-radius: 15px;
  animation: ${show} 0.3s ease forwards;
  transform-origin: top right;
  z-index: 100;

  p {
    font-size: var(--paragraph-size);
    font-weight: 600;
    text-align: center;
    color: var(--mahogany);
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  a {
    background-color: transparent;
    border: none;
    width: 100%;
    display: flex;
    padding: 5px;
    align-items: center;
    gap: 10px;
    color: var(--mahogany);
    cursor: pointer;

    &:hover {
      background-color: var(--snow);
    }
  }
`;
