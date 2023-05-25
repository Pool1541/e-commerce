import { Link } from 'react-router-dom';
import { NewsSubtitle, NewsThumbnailsContainer, NewsThumbnail } from './News.styled';
import { Section } from '../elements/Section.styled';
import { Subtitle } from '../elements/Subtitle.styled';
import { Container } from '../elements/Container.styled';
import { news } from '../../mocks/News.json';

export default function News() {
  const baseURL = window.location.origin + window.location.pathname;

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
                <img src={baseURL + element.thumbnail} alt={element.title} />
                <p>{element.title}</p>
              </NewsThumbnail>
            </Link>
          ))}
        </NewsThumbnailsContainer>
      </Container>
    </Section>
  );
}
