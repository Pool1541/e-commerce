import { Link } from 'react-router-dom';
import { NewsSubtitle, NewsThumbnailsContainer, NewsThumbnail } from './News.styled';
import { Section, Subtitle, Container } from '../elements';
import { news } from '../../mocks/News.json';
import image1 from '../../assets/images/iphone15.jpeg';
import image2 from '../../assets/images/ps5.webp';
import image3 from '../../assets/images/samsung.jpeg';

const images = [image1, image2, image3];

export default function News() {
  return (
    <Section>
      <Container>
        <NewsSubtitle>
          <hr />
          <Subtitle>News</Subtitle>
          <hr />
        </NewsSubtitle>
        <NewsThumbnailsContainer>
          {news.map((element, index) => (
            <Link to={`/`} key={element.id}>
              <NewsThumbnail>
                <img src={images[index]} alt={element.title} />
                <p>{element.title}</p>
              </NewsThumbnail>
            </Link>
          ))}
        </NewsThumbnailsContainer>
      </Container>
    </Section>
  );
}
