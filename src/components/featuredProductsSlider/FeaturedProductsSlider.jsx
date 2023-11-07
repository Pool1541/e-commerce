import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import FeaturedProductsSlide from './FeaturedProductsSlide';
import 'swiper/css';
import 'swiper/css/navigation';
import styled from 'styled-components';
import useSlidesPerView from '../../hooks/useSlidesPerView';
import BREAKPOINTS from '../../assets/styles/breakPoints';
import useDataFetcher from '../../hooks/useDataFetcher';
import { fetchProducts } from '../../repositories/productRepository';
import SkeletonSlide from '../HeroSlider/SkeletonSlide';

const FPSwiper = styled(Swiper)`
  @media screen and (${BREAKPOINTS.MOVIL_L}) {
    padding: 0;
  }
`;

export default function FeaturedProductsSlider() {
  const SlidesPerView = useSlidesPerView();
  const { data: products, loading } = useDataFetcher({ fetcherFn: fetchProducts });
  const SkeletonSlides = Array.from({ length: SlidesPerView }).map((_, index) => (
    <SkeletonSlide key={index} />
  ));

  if (loading)
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          gap: '15px',
        }}>
        {SkeletonSlides}
      </div>
    );

  return (
    <FPSwiper
      slidesPerView={SlidesPerView}
      centeredSlidesBounds={true}
      spaceBetween={15}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
      }}
      modules={[Autoplay]}>
      {products.products.map((product) => (
        <SwiperSlide key={product.id}>
          <FeaturedProductsSlide product={product} />
        </SwiperSlide>
      ))}
    </FPSwiper>
  );
}
