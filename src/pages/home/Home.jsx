import Departments from '../../components/departments/Departments';
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Departments />
      <FeaturedProducts />
    </>
  );
}
