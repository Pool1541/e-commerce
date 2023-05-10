import styled from 'styled-components';

export const FPSlide = styled.div`
  color: black;
  background-color: var(--white);
  width: 180px;
  height: 100%;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  img {
    max-width: 100px;
  }

  p {
    font-size: 1.3rem;
    text-align: center;
  }
`;
