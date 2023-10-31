import { Link } from 'react-router-dom';
import { Container } from '../elements/Container.styled';
import { GridContainer } from '../elements/GridContainer.styled';
import { Subtitle } from '../elements/Subtitle.styled';
import { Section } from '../elements/Section.styled';
import { GridItemContainer, GridItemImage, GridItemTitle } from './Departments.styled';
import { getCategories } from '../../repositories/categoryRepository';
import useDataFetcher from '../../hooks/useDataFetcher';
import { PUBLIC_ROUTES } from '../../config';
import { transformToTitleCase } from '../../utils';
import SkeletonDepartment from './SkeletonDepartment';

export default function Departments() {
  const { data: categories, loading } = useDataFetcher({ fetcherFn: getCategories });

  return (
    <Section>
      <Container small>
        <Subtitle>Departments</Subtitle>
        {loading ? (
          <GridContainer>
            {Array.from({ length: 8 }, (_) => null).map((e, index) => (
              <SkeletonDepartment key={index} />
            ))}
          </GridContainer>
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
  const transformedTitle = transformToTitleCase(category.name);
  return (
    <Link to={`${PUBLIC_ROUTES.CATEGORY}/${category.name}`}>
      <GridItemContainer>
        <GridItemImage>
          <img src={category.image} alt={transformedTitle} />
        </GridItemImage>
        <GridItemTitle>
          <h3>{transformedTitle}</h3>
        </GridItemTitle>
      </GridItemContainer>
    </Link>
  );
}
