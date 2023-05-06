import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import HeroSlide from './HeroSlide';
import { products_on_sale as products } from '../../mocks/productsInOffer.json';

export default function HeroSlider() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}>
      {products.map((product, i) => (
        <SwiperSlide key={i}>
          <HeroSlide product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
