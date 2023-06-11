import { useContext } from 'react';
import { FilterContext } from '../../../../context/FilterContext';
import useOutsideClick from '../../../../hooks/useOutsideClick';
import useFilterSidebar from '../../hooks/useFilterSidebar';
import Filters from './Filters';
import { StyledFilterContainer } from './Filters.styled';

export default function FilterSidebar() {
  const { toggleFilterSidebar } = useFilterSidebar();
  const ref = useOutsideClick(toggleFilterSidebar);
  const { filters } = useContext(FilterContext);

  return (
    <StyledFilterContainer ref={ref}>
      <h3>Filtrar por: </h3>
      <br />
      {filters.map((filter) => (
        <Filters
          filterList={filter.filterList}
          title={filter.title}
          key={filter.title}
          range={filter.title === 'maxPrice'}
        />
      ))}
    </StyledFilterContainer>
  );
}
