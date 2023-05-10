import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import FeaturedProductsSlide from './FeaturedProductsSlide';
import 'swiper/css';
import 'swiper/css/navigation';
import styled from 'styled-components';
import useSlidesPerView from '../../hooks/useSlidesPerView';
import BREAKPOINTS from '../../assets/styles/breakPoints';

const FPSwiper = styled(Swiper)`
  padding: 0 0 0 30px;

  @media screen and (${BREAKPOINTS.MOVIL_L}) {
    padding: 0;
  }
`;

export default function FeaturedProductsSlider() {
  const SlidesPerView = useSlidesPerView();

  return (
    <FPSwiper
      slidesPerView={SlidesPerView}
      centeredSlidesBounds={true}
      spaceBetween={10}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
      }}
      modules={[Autoplay]}>
      <SwiperSlide>
        <FeaturedProductsSlide />
      </SwiperSlide>
      <SwiperSlide>
        <FeaturedProductsSlide />
      </SwiperSlide>
      <SwiperSlide>
        <FeaturedProductsSlide />
      </SwiperSlide>
      <SwiperSlide>
        <FeaturedProductsSlide />
      </SwiperSlide>
      <SwiperSlide>
        <FeaturedProductsSlide />
      </SwiperSlide>
      <SwiperSlide>
        <FeaturedProductsSlide />
      </SwiperSlide>
      <SwiperSlide>
        <FeaturedProductsSlide />
      </SwiperSlide>
      <SwiperSlide>
        <FeaturedProductsSlide />
      </SwiperSlide>
      <SwiperSlide>
        <FeaturedProductsSlide />
      </SwiperSlide>
      <SwiperSlide>
        <FeaturedProductsSlide />
      </SwiperSlide>
      <SwiperSlide>
        <FeaturedProductsSlide />
      </SwiperSlide>
      <SwiperSlide>
        <FeaturedProductsSlide />
      </SwiperSlide>
      <SwiperSlide>
        <FeaturedProductsSlide />
      </SwiperSlide>
      <SwiperSlide>
        <FeaturedProductsSlide />
      </SwiperSlide>
      <SwiperSlide>
        <FeaturedProductsSlide />
      </SwiperSlide>
      <SwiperSlide>
        <FeaturedProductsSlide />
      </SwiperSlide>
    </FPSwiper>
  );
}
