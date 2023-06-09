import styled from 'styled-components';
import BREAKPOINTS from '../../assets/styles/breakPoints';

export const AvatarContainer = styled.div`
  width: 40px;
  height: 40px;
  position: relative;

  @media screen and (${BREAKPOINTS.MOVIL_L}) {
    width: 35px;
    height: 35px;
  }

  button {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid var(--gray);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
