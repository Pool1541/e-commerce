import useOutsideClick from '../../../../hooks/useOutsideClick';
import useFilterSidebar from '../../hooks/useFilterSidebar';
import Filters from './Filters';
import { StyledFilterContainer } from './Filters.styled';

const priceFilter = {
  title: 'maxPrice',
  filterList: [
    {
      value: 0,
      title: '',
    },
  ],
};

const categoryFilter = {
  title: 'category',
  filterList: [
    {
      value: 'smartphones',
      title: 'SmartPhones',
    },
    {
      value: 'videojuegos',
      title: 'Videojuegos',
    },
    {
      value: 'consolas',
      title: 'Consolas',
    },
    {
      value: 'computo',
      title: 'Computo',
    },
  ],
};

const brandFilter = {
  title: 'brand',
  filterList: [
    {
      value: 'apple',
      title: 'Apple',
    },
    {
      value: 'sony',
      title: 'Sony',
    },
    {
      value: 'motorola',
      title: 'Motorola',
    },
    {
      value: 'nintendo',
      title: 'Nintendo',
    },
    {
      value: 'samsung',
      title: 'Samsung',
    },
    {
      value: 'xiaomi',
      title: 'Xiaomi',
    },
    {
      value: 'meta',
      title: 'Meta',
    },
  ],
};

export default function FilterSidebar() {
  const { toggleFilterSidebar } = useFilterSidebar();
  const ref = useOutsideClick(toggleFilterSidebar);

  return (
    <StyledFilterContainer ref={ref}>
      <h3>Filtrar por: </h3>
      <br />
      <Filters filterList={categoryFilter.filterList} title={categoryFilter.title} />
      <Filters filterList={brandFilter.filterList} title={brandFilter.title} />
      <Filters filterList={priceFilter.filterList} title={priceFilter.title} range />
    </StyledFilterContainer>
  );
}
