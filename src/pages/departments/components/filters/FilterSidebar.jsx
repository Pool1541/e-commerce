import { StyledFilterContainer } from './Filters.styled';
import Filters from './Filters';
import { getFilters } from '@/repositories/filterRepository';
import { useOutsideClick, useDataFetcher, useFilterQueries } from '@/hooks';
import useFilterSidebar from '../../hooks/useFilterSidebar';

export default function FilterSidebar() {
  const { toggleFilterSidebar } = useFilterSidebar();
  const ref = useOutsideClick(toggleFilterSidebar);
  const { searchParams, currentCategory, currentPath, queryBuilders } = useFilterQueries();

  const query = queryBuilders[currentPath]();

  const {
    data: filters,
    loading,
    error,
  } = useDataFetcher({
    fetcherFn: getFilters,
    args: { query },
    dependencies: [currentCategory, searchParams],
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
