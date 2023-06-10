import { FiltersBackdrop } from './Filters.styled';
import FilterSidebar from './FilterSidebar';
import useFilterSidebar from '../../hooks/useFilterSidebar';

export default function FilterContainer() {
  const { filtersSidebarIsOpen } = useFilterSidebar();

  return (
    <>
      <FiltersBackdrop open={filtersSidebarIsOpen} />
      {filtersSidebarIsOpen && <FilterSidebar />}
    </>
  );
}
