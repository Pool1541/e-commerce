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

  // Agragar un oyente de evento para detectar el resize del viewport y ajustar el comportamiento de la función toggle de acuerdo a ello.

  return (
    <FilterSidebarContext.Provider value={{ filtersSidebarIsOpen, toggleFilterSidebar }}>
      {children}
    </FilterSidebarContext.Provider>
  );
}
