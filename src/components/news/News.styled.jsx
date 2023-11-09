import styled from 'styled-components';
import BREAKPOINTS from '../../assets/styles/breakPoints';

export const NewsSubtitle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  h2 {
    margin-bottom: 0;
  }

  hr {
    width: 100%;
    height: 1px;
    transform: rotate(180deg);
  }
`;

export const NewsThumbnailsContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 30px;
  justify-content: space-between;
  padding: 20px 0;

  @media screen and (${BREAKPOINTS.TABLET_L}) {
    grid-template-columns: repeat(1, minmax(200px, 400px));
    place-content: center;
  }
`;

export const NewsThumbnail = styled.div`
  height: 200px;
  border-radius: 25px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--snow);
    font-size: clamp(1.3rem, 1.5vw, 1.8rem);
    font-weight: 700;
    background-color: #b6b6b6bb;
    width: 100%;
    height: 30%;
    transition: all 0.3s ease;
  }

  &:hover > p {
    background-color: #bd400653;
    height: 100%;
  }
`;
