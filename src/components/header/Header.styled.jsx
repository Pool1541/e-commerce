import styled from 'styled-components';
import BREAKPOINTS from '../../assets/styles/breakPoints';

export const HeaderContainer = styled.header`
  border-bottom: 1px solid #ccc;
`;

export const NavBar = styled.nav`
  max-width: 1400px;
  width: 100%;
  height: 65px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media screen and (${BREAKPOINTS.TABLET_M}) {
    padding: 0 10px;
  }
`;
