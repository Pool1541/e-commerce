import { createContext } from 'react';
import useSessionStorage from '../hooks/useSessionStorage';

export const FilterContext = createContext();
const initialValue = [
  {
    title: 'category',
    filterList: [
      {
        value: 'smartphones',
        checked: false,
      },
      {
        value: 'videojuegos',
        checked: false,
      },
      {
        value: 'consolas',
        checked: false,
      },
      {
        value: 'computo',
        checked: false,
      },
    ],
  },
  {
    title: 'brand',
    filterList: [
      {
        value: 'apple',
        checked: false,
      },
      {
        value: 'sony',
        checked: false,
      },
      {
        value: 'motorola',
        checked: false,
      },
      {
        value: 'nintendo',
        checked: false,
      },
      {
        value: 'samsung',
        checked: false,
      },
      {
        value: 'xiaomi',
        checked: false,
      },
      {
        value: 'meta',
        checked: false,
      },
    ],
  },
  {
    title: 'maxPrice',
    filterList: [
      {
        value: 0,
        checked: false,
      },
    ],
  },
];

export default function FilterContextProvider({ children }) {
  const filtersKey = 'Filters';
  const [filters, setFilters] = useSessionStorage(filtersKey, initialValue);

  function changeFilters(filterName, filterValue) {
    const filtersClone = structuredClone(filters);
    const filterToChange = filtersClone.find((filter) => filter.title === filterName);
    filterToChange.filterList = filterValue;
    setFilters(filtersClone);
  }

  return (
    <FilterContext.Provider value={{ filters, changeFilters }}>{children}</FilterContext.Provider>
  );
}
