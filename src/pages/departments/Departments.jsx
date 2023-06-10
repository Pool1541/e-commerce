import Header from '../../components/header/Header';
import { Main } from '../../components/elements';
import Footer from '../../components/footer/Footer';
import GridContainer from './components/gridContainer/GridContainer';
import FilterContainer from './components/filters/FilterContainer';
import FilterContextProvider from '../../context/FilterContext';
import { DepartmentsContainer } from './Departments.styled';
import FilterSidebarContextProvider from './context/FilterSidebarContext';
import Buttons from './components/buttons/Buttons';

export default function Departments() {
  return (
    <FilterContextProvider>
      <FilterSidebarContextProvider>
        <Header />
        <Main>
          <DepartmentsContainer>
            <FilterContainer />
            <div>
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
