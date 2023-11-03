import { createContext, useEffect } from 'react';
import { getFilters } from '../repositories/filterRepository';
import useSessionStorage from '../hooks/useSessionStorage';
import { useParams, useSearchParams } from 'react-router-dom';

export const FilterContext = createContext();

export default function FilterContextProvider({ children }) {
  const filtersKey = 'Filters';
  const { categoryName: currentCategory } = useParams();
  const [filters, setFilters] = useSessionStorage(filtersKey, []);
  const [searchParams, setSearchParams] = useSearchParams();

  function changeFilters(filterName, filterValue) {
    const filtersClone = structuredClone(filters);
    const filterToChange = filtersClone.find((filter) => filter.title === filterName);
    filterToChange.filterList = filterValue;

    const result = filterValue
      .filter((curr) => curr.checked)
      .map((curr) => curr.value)
      .join(',');

    searchParams.delete('page');
    result ? searchParams.set(filterName, result) : searchParams.delete(filterName);

    setSearchParams(searchParams);
    setFilters(filtersClone);
  }

  async function getInitialFilter({ category }) {
    const response = await getFilters({ category });
    const transformData = response.map((item) => {
      const filterList = item.filterList.map((filter) => {
        return item.title === 'maxPrice'
          ? { maxValue: filter, value: 0, checked: false }
          : { value: filter, checked: false };
      });
      return { ...item, filterList };
    });

    transformData[0].category = currentCategory;

    setFilters(transformData);
  }

  useEffect(() => {
    currentCategory !== filters[0]?.category && getInitialFilter({ category: currentCategory });
  }, [currentCategory]);

  return (
    <FilterContext.Provider value={{ filters, changeFilters, currentCategory }}>
      {children}
    </FilterContext.Provider>
  );
}
