import useOutsideClick from '../../../../hooks/useOutsideClick';
import useFilterSidebar from '../../hooks/useFilterSidebar';
import Filters from './Filters';
import { StyledFilterContainer } from './Filters.styled';
import useDataFetcher from '../../../../hooks/useDataFetcher';
import { getFilters } from '../../../../repositories/filterRepository';
import { useParams } from 'react-router-dom';

export default function FilterSidebar() {
  const { toggleFilterSidebar } = useFilterSidebar();
  const ref = useOutsideClick(toggleFilterSidebar);
  const { categoryName: currentCategory } = useParams();

  const {
    data: filters,
    loading,
    error,
  } = useDataFetcher({
    fetcherFn: getFilters,
    args: { category: currentCategory },
    dependencies: [currentCategory],
  });

  return (
    <StyledFilterContainer ref={ref}>
      <h3>Filtrar por: </h3>
      <br />
      {filters?.map((filter) => (
        <Filters filterList={filter.filterList} title={filter.title} key={filter.title} />
      ))}
    </StyledFilterContainer>
  );
}
