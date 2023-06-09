import styled from 'styled-components';
import { Container } from '../../components/elements';
import BREAKPOINTS from '../../assets/styles/breakPoints';

export const DepartmentsContainer = styled(Container)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 50px auto;
  gap: 1rem;

  @media screen and (${BREAKPOINTS.TABLET_L}) {
    flex-direction: column;
  }
`;
