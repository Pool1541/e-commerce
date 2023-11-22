import styled from 'styled-components';
import BREAKPOINTS from '../../../../assets/styles/breakPoints';

export const StyledSidebar = styled.aside`
  /* width: 100%; */
  /* height: calc(100vh - 6.4rem); */
  /* top: 6.4rem; */
  /* max-width: 28.8rem; */
  width: 100%;
  max-width: 20rem;
  color: var(--p-color);
  overflow: auto;

  @media screen and (${BREAKPOINTS.TABLET_L}) {
    position: static;
    height: unset;
    max-width: unset;
  }
`;

export const SidebarNav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 10rem;
  padding: 0 1rem;

  @media screen and (${BREAKPOINTS.TABLET_L}) {
    margin-top: unset;
    flex-direction: row;
    align-items: center;
    padding: 1rem 0;

    li {
      width: 50%;
      min-width: 12rem;

      a {
        padding: 1rem 0;
        justify-content: center;
      }
    }
  }
`;

export const LinkWrapper = styled.li`
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    padding: 1.3rem 1rem;
    border-radius: 0.5rem;
    font-size: 1.6rem;
    font-weight: 500;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  a.active {
    color: var(--mahogany);
  }
`;
