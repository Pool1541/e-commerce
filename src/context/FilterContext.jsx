import { createContext, useEffect } from 'react';
import useSessionStorage from '../hooks/useSessionStorage';
import { getFilters } from '../repositories/filterRepository';

export const FilterContext = createContext();

export default function FilterContextProvider({ children }) {
  const filtersKey = 'Filters';
  const [filters, setFilters] = useSessionStorage(filtersKey, []);

  function changeFilters(filterName, filterValue) {
    const filtersClone = structuredClone(filters);
    const filterToChange = filtersClone.find((filter) => filter.title === filterName);
    filterToChange.filterList = filterValue;
    setFilters(filtersClone);
  }

  async function getAllFilters() {
    const response = await getFilters();
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
    if (filters.length <= 0) getAllFilters();
  }, []);

  return (
    <FilterContext.Provider value={{ filters, changeFilters }}>{children}</FilterContext.Provider>
  );
}
