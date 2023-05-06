import HeroSection, {
  HeroContainer,
  Banner,
  Slider,
  BannerText,
  FooterOfBanner,
} from './Hero.styled';
import bannerImage from '../../assets/images/banner.jpg';
import HeroSlider from '../HeroSlider/HeroSlider';

export default function Hero() {
  return (
    <HeroSection>
      <HeroContainer>
        <Banner>
          <img src={bannerImage} alt='Banner' />
          <BannerText>
            <h1>Check out our selection of tu bishvat exotic fruits</h1>
            <hr />
            <FooterOfBanner>
              <button>Shop now</button>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur laboriosam ex
                eveniet assumenda repellendus praesentium!
              </p>
            </FooterOfBanner>
          </BannerText>
        </Banner>
        <Slider>
          <HeroSlider />
        </Slider>
      </HeroContainer>
    </HeroSection>
  );
}
