import { StyledFilterContainer } from './Filters.styled';
import Filters from './Filters';

const priceFilter = {
  title: 'price',
  filterList: [
    {
      value: 5,
      title: '$5.00 and under',
    },
    {
      value: 10,
      title: '$10.00 and under',
    },
    {
      value: 15,
      title: '$15.00 and under',
    },
  ],
};

const categoryFilter = {
  title: 'category',
  filterList: [
    {
      value: 'smarthphone',
      title: 'SmarthPhone',
    },
    {
      value: 'videogame',
      title: 'Videogame',
    },
    {
      value: 'console',
      title: 'Console',
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
  ],
};

export default function FilterContainer() {
  return (
    <StyledFilterContainer>
      <Filters filterList={categoryFilter.filterList} title={categoryFilter.title} />
      <Filters filterList={brandFilter.filterList} title={brandFilter.title} />
      <Filters filterList={priceFilter.filterList} title={priceFilter.title} radio />
    </StyledFilterContainer>
  );
}
