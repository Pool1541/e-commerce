import styled from 'styled-components';
import BREAKPOINTS from '../../assets/styles/breakPoints';

export const StyledFooter = styled.footer`
  background-color: var(--mahogany);
`;

export const FooterGrid = styled.div`
  display: grid;
  padding: 50px 0;
  grid-template-columns: repeat(3, minmax(150px, 1fr));
  gap: min(100px, 6vw);

  @media screen and (${BREAKPOINTS.TABLET_L}) {
    grid-template-columns: 1fr;
  }
`;

export const FooterList = styled.div`
  h3 {
    color: var(--white);
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: var(--white);
    margin-top: 20px;
  }

  li {
    display: flex;
    gap: 15px;
    align-items: center;
    transition: color 0.2s ease;

    svg {
      width: 30px;
      height: 30px;
      color: var(--white);
      transition: color 0.2s ease;
    }

    &:hover :not(:first-child),
    &:hover > svg {
      color: var(--tea-rose);
    }
  }
`;
