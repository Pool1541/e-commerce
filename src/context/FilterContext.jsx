import { createContext, useEffect } from 'react';
import { getFilters } from '../repositories/filterRepository';
import useSessionStorage from '../hooks/useSessionStorage';
import { useParams } from 'react-router-dom';

export const FilterContext = createContext();

export default function FilterContextProvider({ children }) {
  const filtersKey = 'Filters';
  const { categoryName: currentCategory } = useParams();
  const [filters, setFilters] = useSessionStorage(filtersKey, []);

  function changeFilters(filterName, filterValue) {
    const filtersClone = structuredClone(filters);
    const filterToChange = filtersClone.find((filter) => filter.title === filterName);
    filterToChange.filterList = filterValue;
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

    setFilters(transformData);
  }

  useEffect(() => {
    getInitialFilter({ category: currentCategory });
  }, [currentCategory]);

  return (
    <FilterContext.Provider value={{ filters, changeFilters, currentCategory }}>
      {children}
    </FilterContext.Provider>
  );
}
