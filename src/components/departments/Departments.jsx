import styled from 'styled-components';
import { Container } from '../elements/Container.styled';
import { GridContainer } from '../elements/GridContainer.styled';
import { Subtitle } from '../elements/Subtitle.styled';
import Section from '../elements/Section.styled';

export default function Departments() {
  return (
    <Section>
      <Container small>
        <Subtitle>Departments</Subtitle>
        <GridContainer>
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
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
  justify-content: center;
  border: 2px solid rgba(145, 145, 145, 0.32);
`;

const GridItemImage = styled.div`
  width: 100%;

  img {
    width: 100%;
    filter: drop-shadow(3px 3px 5px #bd40064d);
  }
`;

const GridItemTitle = styled.div`
  color: var(--mahogany);
`;

function GridItem() {
  return (
    <GridItemContainer>
      <GridItemImage>
        <img
          src='https://www.dole.com/-/media/project/dole/produce-images/headers/dole-produce-fruit-medley.png?h=540&w=720&rev=0838c3eee98b4dbbb72b166dc3376a08&hash=B1C694F79387C1DBCCE988296505C385'
          alt='Fruits'
        />
      </GridItemImage>
      <GridItemTitle>
        <h3>Tu Bi Shvat</h3>
      </GridItemTitle>
    </GridItemContainer>
  );
}
