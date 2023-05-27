import { Link } from 'react-router-dom';
import { NewsSubtitle, NewsThumbnailsContainer, NewsThumbnail } from './News.styled';
import { Section, Subtitle, Container } from '../elements';
import { news } from '../../mocks/News.json';

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
          {news.map((element) => (
            <Link to={`/`} key={element.id}>
              <NewsThumbnail>
                <img src={import.meta.env.BASE_URL + element.thumbnail} alt={element.title} />
                <p>{element.title}</p>
              </NewsThumbnail>
            </Link>
          ))}
        </NewsThumbnailsContainer>
      </Container>
    </Section>
  );
}
