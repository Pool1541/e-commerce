import { HeroContainer, Banner, Slider, BannerText, FooterOfBanner } from './Hero.styled';
import bannerImage from '../../assets/images/banner.jpg';
import HeroSlider from '../HeroSlider/HeroSlider';
import { Section } from '../elements/Section.styled';

export default function Hero() {
  return (
    <Section>
      <HeroContainer>
        <Banner>
          <img src={bannerImage} alt='Banner' />
        </Banner>
        <Slider>
          <HeroSlider />
        </Slider>
      </HeroContainer>
    </Section>
  );
}
