import { useParams, useSearchParams } from 'react-router-dom';
import { StyledFilterContainer } from './Filters.styled';
import Filters from './Filters';
import { getFilters } from '@/repositories/filterRepository';
import { useOutsideClick, useDataFetcher } from '@/hooks';
import useFilterSidebar from '../../hooks/useFilterSidebar';

export default function FilterSidebar() {
  const { toggleFilterSidebar } = useFilterSidebar();
  const [searchParams] = useSearchParams();
  const { categoryName: currentCategory } = useParams();
  const ref = useOutsideClick(toggleFilterSidebar);

  const keyword = searchParams.get('keyword');
  const query = keyword ? { keyword } : { category: currentCategory };

  const {
    data: filters,
    loading,
    error,
  } = useDataFetcher({
    fetcherFn: getFilters,
    args: query,
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
