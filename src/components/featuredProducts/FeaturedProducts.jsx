import { Container } from '../elements/Container.styled';
import { Subtitle } from '../elements/Subtitle.styled';
import Button from '../elements/Button.styled';
import { Section } from '../elements/Section.styled';
import { FPContainer, FPHeader, Slider } from './FeaturedProducts.styled';
import backgroundImage from '../../assets/images/featured-products-background.jpg';
import FeaturedProductsSlider from '../featuredProductsSlider/FeaturedProductsSlider';

export default function FeaturedProducts() {
  return (
    <Section>
      <Container>
        <FPContainer>
          <img src={backgroundImage} alt='featured products background' />
          <FPHeader>
            <Subtitle>Featured Products</Subtitle>
            <Button>See more</Button>
          </FPHeader>
          <Slider>
            <FeaturedProductsSlider />
          </Slider>
        </FPContainer>
      </Container>
    </Section>
  );
}
