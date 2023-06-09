import { createContext, useState } from 'react';

export const FilterContext = createContext();
const initialValue = {
  category: [],
  brand: [],
  maxPrice: 0,
};

export default function FilterContextProvider({ children }) {
  const [filters, setFilters] = useState(initialValue);

  function changeFilters(filterName, filterValue) {
    setFilters((prevState) => ({ ...prevState, [filterName]: filterValue }));
  }

  return (
    <FilterContext.Provider value={{ filters, changeFilters }}>{children}</FilterContext.Provider>
  );
}
