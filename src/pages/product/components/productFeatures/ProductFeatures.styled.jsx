import styled from 'styled-components';
import BREAKPOINTS from '../../../../assets/styles/breakPoints';

export const ProductFeaturesContainer = styled.div`
  background-color: #f1f1f1;
  border-radius: 0.5rem;
  padding: 1.5rem;

  @media screen and (${BREAKPOINTS.LAPTOP_L}) {
    flex: none;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-left: 1.5rem;
    list-style: disc;
  }

  li {
    font-size: 1.4rem;
    line-height: 1.8rem;
  }

  li::marker {
    color: var(--gray);
  }
`;
