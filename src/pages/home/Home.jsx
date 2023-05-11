import Departments from '../../components/departments/Departments';
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import News from '../../components/news/News';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Departments />
        <FeaturedProducts />
        <News />
      </main>
      <Footer />
    </>
  );
}
