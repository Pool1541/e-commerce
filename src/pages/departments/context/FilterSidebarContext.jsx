import { useState } from 'react';
import { createContext } from 'react';

const MobileViewport = 768;
const isDesktopViewport = window.innerWidth > MobileViewport;

export const FilterSidebarContext = createContext();

export default function FilterSidebarContextProvider({ children }) {
  const [filtersSidebarIsOpen, setFiltersSidebarIsOpen] = useState(isDesktopViewport);

  function toggleFilterSidebar() {
    if (!isDesktopViewport) setFiltersSidebarIsOpen(!filtersSidebarIsOpen);
  }

  return (
    <FilterSidebarContext.Provider value={{ filtersSidebarIsOpen, toggleFilterSidebar }}>
      {children}
    </FilterSidebarContext.Provider>
  );
}
