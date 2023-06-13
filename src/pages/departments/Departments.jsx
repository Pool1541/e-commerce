import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Buttons from './components/buttons/Buttons';
import GridContainer from './components/gridContainer/GridContainer';
import FilterContainer from './components/filters/FilterContainer';
import FilterContextProvider from '../../context/FilterContext';
import FilterSidebarContextProvider from './context/FilterSidebarContext';
import { DepartmentsContainer } from './Departments.styled';
import { Main } from '../../components/elements';

export default function Departments() {
  return (
    <FilterContextProvider>
      <FilterSidebarContextProvider>
        <Header />
        <Main>
          <DepartmentsContainer>
            <FilterContainer />
            <div style={{ flex: '1 1 auto' }}>
              <Buttons />
              <GridContainer />
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  height: '80px',
                }}>
                Pagination
              </div>
            </div>
          </DepartmentsContainer>
        </Main>
        <Footer />
      </FilterSidebarContextProvider>
    </FilterContextProvider>
  );
}
