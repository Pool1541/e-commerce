import { useId } from 'react';
import { FilterWrapper, StyledFilters } from './Filters.styled';

export default function Filters({ title, filterList, radio = false }) {
  function handleChange(e) {
    console.log(e.target);
  }
  return (
    <StyledFilters onChange={handleChange}>
      <h4>{title}</h4>
      {filterList.map((item) => {
        const id = useId();
        return (
          <FilterWrapper key={id}>
            <input type={radio ? 'radio' : 'checkbox'} name={title} id={id} value={item.value} />
            <label htmlFor={id}>{item.title}</label>
          </FilterWrapper>
        );
      })}
    </StyledFilters>
  );
}
