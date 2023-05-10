import styled from 'styled-components';
import BREAKPOINTS from '../../assets/styles/breakPoints';

export const Container = styled.div`
  max-width: ${({ small }) => (small ? '1200px' : '1400px')};
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;

  @media screen and (${BREAKPOINTS.TABLET_M}) {
    padding: 0 10px;
  }
`;
