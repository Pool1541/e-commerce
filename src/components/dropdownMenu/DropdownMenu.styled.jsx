import styled, { css, keyframes } from 'styled-components';

const show = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fromTop = css`
  top: 220%;
  left: 0;
  transform-origin: top left;
`;

const fromLeft = css`
  top: 0;
  left: 102%;
  transform-origin: top left;
`

const origins = {
  fromTop,
  fromLeft,
}

export const DropdownMenuWrapper = styled.div`
  ${({ origin }) => origins[origin] || origins.fromTop}

  width: 22.5rem;
  user-select: auto;
  border: 1px solid #d0acaf6b;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: var(--white);
  padding: 0.4rem;
  border-radius: 0.4rem;
  animation: ${show} 0.3s ease forwards;
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

  li {
    background-color: transparent;
    border: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    color: var(--p-color);
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 400;

    & .menu-item {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.8rem 0.5rem 0.8rem 1rem;
    }

    &:hover {
      background-color: var(--snow);
    }

    & .dropdown-menu-icon {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;

export const DropdownMenuSeparator = styled.hr`
  margin: 0.5rem 0;
  opacity: 0.3;
`;
