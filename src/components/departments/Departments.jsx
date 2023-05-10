import styled from 'styled-components';
import { Container } from '../elements/Container.styled';
import { GridContainer } from '../elements/GridContainer.styled';
import { Subtitle } from '../elements/Subtitle.styled';
import Section from '../elements/Section.styled';
import products from '../../mocks/ProductsByCategory.json';
import { Link } from 'react-router-dom';

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

const GridItemContainer = styled.div`
  height: 200px;
  border-radius: 25px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 2px solid rgba(145, 145, 145, 0.32);
`;

const GridItemImage = styled.div`
  width: 150px;
  height: 100px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(3px 3px 5px #bd40064d);
  }
`;

const GridItemTitle = styled.div`
  color: var(--mahogany);
`;

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
