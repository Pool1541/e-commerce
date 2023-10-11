import styled from 'styled-components';

export const BodyInformation = styled.div`
  display: flex;

  h1 {
    width: 80%;
    font-size: 2rem;
    border-bottom: solid 1px #000;
    padding-bottom: 10px;
    overflow: hidden;
  }
`;

export const FeatureContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  gap: 10px;

  /* ul {
    list-style-type: disc;
  } */

  li {
    width: 80%;
    padding-bottom: 10px;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  gap: 10px;

  li {
    width: 80%;
    padding-bottom: 10px;
  }
`;

export const StyleFeature = styled.div`
  display: flex;
  justify-content: space-between;

  p:last-child {
    font-weight: bold;
  }
`;
