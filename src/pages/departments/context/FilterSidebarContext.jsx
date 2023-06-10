import { useEffect, useState } from 'react';
import { createContext } from 'react';

const mobileViewportWidth = 768;
const initialValue = window.innerWidth < mobileViewportWidth;

export const FilterSidebarContext = createContext();

export default function FilterSidebarContextProvider({ children }) {
  const [isMobileViewport, setIsMobileViewport] = useState(initialValue);
  const [filtersSidebarIsOpen, setFiltersSidebarIsOpen] = useState(!isMobileViewport);

  function toggleFilterSidebar() {
    if (isMobileViewport) setFiltersSidebarIsOpen(!filtersSidebarIsOpen);
  }

  useEffect(() => {
    function handleResize(e) {
      const currentViewportWidth = e.target.innerWidth;
      if (!isMobileViewport && currentViewportWidth < mobileViewportWidth) {
        setIsMobileViewport(true);
        setFiltersSidebarIsOpen(false);
      } else if (isMobileViewport && currentViewportWidth > mobileViewportWidth) {
        setIsMobileViewport(false);
        setFiltersSidebarIsOpen(true);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileViewport]);

  return (
    <FilterSidebarContext.Provider value={{ filtersSidebarIsOpen, toggleFilterSidebar }}>
      {children}
    </FilterSidebarContext.Provider>
  );
}
