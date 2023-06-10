import { useState } from 'react';
import { createContext } from 'react';

const MobileWith = 768;
const initialValue = window.innerWidth > MobileWith;

export const FilterSidebarContext = createContext();

export default function FilterSidebarContextProvider({ children }) {
  const [filtersSidebarIsOpen, setFiltersSidebarIsOpen] = useState(initialValue);

  function toggleFilterSidebar() {
    setFiltersSidebarIsOpen(!filtersSidebarIsOpen);
  }

  return (
    <FilterSidebarContext.Provider value={{ filtersSidebarIsOpen, toggleFilterSidebar }}>
      {children}
    </FilterSidebarContext.Provider>
  );
}
