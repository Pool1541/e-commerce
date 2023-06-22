import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import HeroSlide from './HeroSlide';
import useProducts from '../../hooks/useProducts';

export default function HeroSlider() {
  const { products, loading } = useProducts();

  if (loading) return <div>Cargando...</div>;

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}>
      {products.products.map((product, i) => (
        <SwiperSlide key={i}>
          <HeroSlide product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
