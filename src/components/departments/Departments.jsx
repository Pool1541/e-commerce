import { Link } from 'react-router-dom';
import products from '../../mocks/ProductsByCategory.json';
import { Container } from '../elements/Container.styled';
import { GridContainer } from '../elements/GridContainer.styled';
import { Subtitle } from '../elements/Subtitle.styled';
import { Section } from '../elements/Section.styled';
import { GridItemContainer, GridItemImage, GridItemTitle } from './Departments.styled';

export default function Departments() {
  return (
    <Section>
      <Container small>
        <Subtitle>Departments</Subtitle>
        <GridContainer>
          {Object.keys(products).map((category, index) => (
            <GridItem
              key={index}
              category={{ name: category, image: products[category].thumbnail }}
            />
          ))}
        </GridContainer>
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
