import Departments from '../../components/departments/Departments';
import { Main } from '../../components/elements/Main.styled';
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import News from '../../components/news/News';

export default function Home() {
  console.log('Shamela')
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Departments />
        <FeaturedProducts />
        <News />
      </Main>
      <Footer />
    </>
  );
}
