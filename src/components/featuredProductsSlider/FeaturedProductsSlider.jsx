import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import FeaturedProductsSlide from './FeaturedProductsSlide';
import 'swiper/css';
import 'swiper/css/navigation';
import styled from 'styled-components';
import useSlidesPerView from '../../hooks/useSlidesPerView';

const FPSwiper = styled(Swiper)`
  padding: 0 0 0 50px;
`;

export default function FeaturedProductsSlider() {
  const SlidesPerView = useSlidesPerView();

  return (
    <FPSwiper
      slidesPerView={SlidesPerView}
      spaceBetween={10}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}>
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
