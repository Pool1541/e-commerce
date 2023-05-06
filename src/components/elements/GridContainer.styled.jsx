import styled from 'styled-components';

export const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: space-around;
  gap: 20px;
`;
