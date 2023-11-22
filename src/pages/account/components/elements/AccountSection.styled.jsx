import styled from 'styled-components';
import { Section } from '../../../../components/elements';
import BREAKPOINTS from '../../../../assets/styles/breakPoints';

export const AccountSection = styled(Section)`
  display: flex;
  @media screen and (${BREAKPOINTS.TABLET_L}) {
    flex-direction: column;
  }
`;
