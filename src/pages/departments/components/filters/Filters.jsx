import { useId } from 'react';
import { FilterWrapper, StyledFilters } from './Filters.styled';

export default function Filters({ title, filterList, range = false }) {
  function handleChange(e) {
    const formData = new FormData(e.current);
    const values = Object.fromEntries(formData);
    console.log(e);
  }
  return (
    <StyledFilters onInput={handleChange}>
      <h4>{title}</h4>
      {filterList.map((item) => {
        const id = useId();
        return (
          <FilterWrapper key={id}>
            <input
              type={range ? 'range' : 'checkbox'}
              name={title}
              id={id}
              value={range ? '' : item.value}
              min={range && 0}
              max={range && 1000}
            />
            <label htmlFor={id}>{item.title}</label>
          </FilterWrapper>
        );
      })}
    </StyledFilters>
  );
}
