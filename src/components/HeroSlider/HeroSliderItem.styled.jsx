import styled from 'styled-components';

export const Slide = styled.div`
  height: 100%;
  display: flex;
  padding: 10px 20px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-weight: 700;

  h3 {
    font-size: 2.3rem;
    white-space: nowrap;
    color: var(--mahogany);
  }

  p {
    font-size: 1.5rem;
    padding: 0 20px;
    color: var(--p-color);
  }

  button {
    display: flex;
    width: 80%;
    height: 35px;
    padding: 5px 0;
    align-items: center;
    background-color: var(--mahogany);
    border-radius: 25px;
    color: var(--white);

    span {
      flex: 1 1 auto;
    }

    hr {
      transform: rotate(180deg);
      height: 100%;
      margin-right: 15px;
    }

    svg {
      margin-right: 20px;
    }
  }
`;

export const SlideImage = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;

  img {
    width: 80%;
    height: 100%;
    object-fit: contain;
  }
`;

export const SlidePrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  color: var(--mahogany);

  span:nth-child(2) {
    color: var(--gray);
    text-decoration: line-through;
  }
`;
