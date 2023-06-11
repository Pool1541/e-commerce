import useOutsideClick from '../../../../hooks/useOutsideClick';
import useFilterSidebar from '../../hooks/useFilterSidebar';
import Filters from './Filters';
import { StyledFilterContainer } from './Filters.styled';

const allFilters = [
  {
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
  },
  {
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
  },
  {
    title: 'maxPrice',
    filterList: [
      {
        value: 0,
        title: '',
      },
    ],
  },
];

export default function FilterSidebar() {
  const { toggleFilterSidebar } = useFilterSidebar();
  const ref = useOutsideClick(toggleFilterSidebar);

  return (
    <StyledFilterContainer ref={ref}>
      <h3>Filtrar por: </h3>
      <br />
      {allFilters.map((filter) =>
        filter.title === 'maxPrice' ? (
          <Filters filterList={filter.filterList} title={filter.title} range key={filter.title} />
        ) : (
          <Filters filterList={filter.filterList} title={filter.title} key={filter.title} />
        )
      )}
    </StyledFilterContainer>
  );
}
