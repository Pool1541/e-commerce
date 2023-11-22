import styled from 'styled-components';
import { Container } from '../../../../components/elements';
import BREAKPOINTS from '../../../../assets/styles/breakPoints';

export const ViewWrapper = styled(Container)`
  padding: 4rem 2rem;
  @media screen and (${BREAKPOINTS.TABLET_L}) {
    padding: 2rem 1rem;
    margin-left: unset;
  }
`;
