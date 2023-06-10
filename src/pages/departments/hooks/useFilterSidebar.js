import { useContext } from 'react';
import { FilterSidebarContext } from '../context/FilterSidebarContext';

export default function useFilterSidebar() {
  return useContext(FilterSidebarContext);
}
