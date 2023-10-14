import { Link } from 'react-router-dom';
import { Container } from '../elements/Container.styled';
import { GridContainer } from '../elements/GridContainer.styled';
import { Subtitle } from '../elements/Subtitle.styled';
import { Section } from '../elements/Section.styled';
import { GridItemContainer, GridItemImage, GridItemTitle } from './Departments.styled';
import { getCategories } from '../../repositories/categoryRepository';
import useDataFetcher from '../../hooks/useDataFetcher';

export default function Departments() {
  const { data: categories, loading } = useDataFetcher({ fetcherFn: getCategories });

  return (
    <Section>
      <Container small>
        <Subtitle>Departments</Subtitle>
        {loading ? (
          <div>Cargando...</div>
        ) : (
          <GridContainer>
            {categories.categories.map((category, index) => (
              <GridItem key={index} category={category} />
            ))}
          </GridContainer>
        )}
      </Container>
    </Section>
  );
}

function GridItem({ category }) {
  return (
    <Link to={'/category/' + category.name}>
      <GridItemContainer>
        <GridItemImage>
          <img src={category.image} alt={category.name} />
        </GridItemImage>
        <GridItemTitle>
          <h3>{category.name}</h3>
        </GridItemTitle>
      </GridItemContainer>
    </Link>
  );
}
