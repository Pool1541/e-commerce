import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${({ small }) => (small ? '1200px' : '1400px')};
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
`;
