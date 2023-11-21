import styled from 'styled-components';
import BREAKPOINTS from '../../assets/styles/breakPoints';

export const FormCaption = styled.div`
  max-width: 35rem;
  width: 100%;
  flex: 1 1 auto;
  color: var(--p-color);

  h2 {
    font-size: 2rem;
    line-height: 3rem;
  }

  p {
    font-size: var(--paragraph-size);
    font-weight: 400;
    color: var(--p-color);
  }

  @media screen and (${BREAKPOINTS.MOVIL_L}) {
    width: unset;
  }
`;
