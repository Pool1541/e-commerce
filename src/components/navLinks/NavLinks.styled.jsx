import styled from 'styled-components';
import BREAKPOINTS from '../../assets/styles/breakPoints';

const NavLinkContainer = styled.ul`
  display: flex;
  gap: 40px;
  
  li {
    color: var(--mahogany);
  }

  @media screen and (${BREAKPOINTS.TABLET_L}) {
    display: none;
  }
`;

export default NavLinkContainer;
