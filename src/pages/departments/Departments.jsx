import Header from '../../components/header/Header';
import { Main } from '../../components/elements';
import Footer from '../../components/footer/Footer';
import GridContainer from './components/gridContainer/GridContainer';
import FilterContainer from './components/filters/FilterContainer';
import FilterContextProvider from '../../context/FilterContext';
import { DepartmentsContainer } from './Departments.styled';

export default function Departments() {
  return (
    <FilterContextProvider>
      <Header />
      <Main>
        <DepartmentsContainer>
          <FilterContainer />
          <GridContainer />
        </DepartmentsContainer>
      </Main>
      <Footer />
    </FilterContextProvider>
  );
}
