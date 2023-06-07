import { createContext, useState } from 'react';

export const FilterContext = createContext();
const initialValue = {
  category: [],
  brand: [],
  maxPrice: 0,
};

export default function FilterContextProvider({ children }) {
  const [filters, setFilters] = useState(initialValue);

  function changeBrand(e) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: [...category, e.target.value],
    }));
  }

  return <FilterContext.Provider value={{ filters }}>{children}</FilterContext.Provider>;
}
