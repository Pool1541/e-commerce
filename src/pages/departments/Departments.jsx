import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Buttons from './components/buttons/Buttons';
import GridContainer from './components/gridContainer/GridContainer';
import FilterContainer from './components/filters/FilterContainer';
import FilterSidebarContextProvider from './context/FilterSidebarContext';
import { DepartmentsContainer } from './Departments.styled';
import { Main } from '../../components/elements';
import Pagination from '../../components/pagination/Pagination';

export default function Departments() {
  return (
    <FilterSidebarContextProvider>
      <Header />
      <Main>
        <DepartmentsContainer>
          <FilterContainer />
          <div style={{ flex: '1 1 auto' }}>
            <Buttons />
            <GridContainer />
            <Pagination />
          </div>
        </DepartmentsContainer>
      </Main>
      <Footer />
    </FilterSidebarContextProvider>
  );
}
