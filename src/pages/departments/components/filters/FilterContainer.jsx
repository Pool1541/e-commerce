import { StyledFilterContainer } from './Filters.styled';
import Filters from './Filters';

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
      title: 'consolas',
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

export default function FilterContainer() {
  return (
    <StyledFilterContainer>
      <Filters filterList={categoryFilter.filterList} title={categoryFilter.title} />
      <Filters filterList={brandFilter.filterList} title={brandFilter.title} />
      <Filters filterList={priceFilter.filterList} title={priceFilter.title} range />
    </StyledFilterContainer>
  );
}
