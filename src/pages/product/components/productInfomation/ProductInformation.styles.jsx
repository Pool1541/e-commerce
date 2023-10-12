import styled from 'styled-components';
import BREAKPOINTS from '../../../../assets/styles/breakPoints';

export const BodyInformation = styled.div`
  display: flex;

  h1 {
    width: 80%;
    font-size: 2rem;
    border-bottom: solid 1px rgb(204, 204, 204);
    padding-bottom: 10px;
    overflow: hidden;
  }

  @media screen and (${BREAKPOINTS.LAPTOP_M}) {
    flex-direction: column-reverse;
    gap: 5rem;

    h1 {
      width: 100%;
    }
  }
`;

export const FeatureContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  gap: 10px;

  ul {
    margin-top: 1rem;
  }

  li {
    width: 80%;
    padding-bottom: 10px;
  }

  @media screen and (${BREAKPOINTS.LAPTOP_M}) {
    width: 100%;

    li {
      width: 100%;
    }
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  gap: 10px;

  ul {
    margin-top: 1rem;
  }

  li {
    width: 80%;
    padding-bottom: 10px;
  }

  @media screen and (${BREAKPOINTS.LAPTOP_M}) {
    width: 100%;

    li {
      width: 100%;
    }
  }
`;

export const StyleFeature = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    width: 50%;
  }

  p:last-child {
    font-weight: bold;
    text-align: end;
  }
`;
