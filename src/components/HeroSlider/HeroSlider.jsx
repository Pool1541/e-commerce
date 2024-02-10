import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { fetchProducts } from '../../repositories/productRepository';
import useDataFetcher from '../../hooks/useDataFetcher';
import HeroSlide from './HeroSlide';
import SkeletonSlide from './SkeletonSlide';

export default function HeroSlider() {
  const { data: products, loading, error } = useDataFetcher({ fetcherFn: fetchProducts });

  if (loading) return <SkeletonSlide />;

  if (error) return <div>Error durante la solicitud al servidor</div>;

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
