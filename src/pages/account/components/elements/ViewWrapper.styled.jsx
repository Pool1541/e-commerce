import styled from 'styled-components';
import { Container } from '../../../../components/elements';
import BREAKPOINTS from '../../../../assets/styles/breakPoints';

export const ViewWrapper = styled(Container)`
  margin: unset;
  margin-left: 28.8rem;
  padding: 40px 0;
  width: unset;
  @media screen and (${BREAKPOINTS.TABLET_L}) {
    margin-left: unset;
  }
`;
