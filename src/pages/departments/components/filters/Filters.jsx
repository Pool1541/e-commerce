import { useContext, useId } from 'react';
import { FilterWrapper, StyledFilters } from './Filters.styled';
import { FilterContext } from '../../../../context/FilterContext';

export default function Filters({ title, filterList, range = false }) {
  const { filters, changeFilters } = useContext(FilterContext);

  function handleChange(e) {
    const nodes = e.target.form.querySelectorAll('input');
    const filters = Array.from(nodes).reduce((acc, curr) => {
      if (curr.checked) acc.push(curr.value);
      return acc;
    }, []);
    changeFilters(title, filters);
  }

  function handleRange(e) {
    changeFilters(title, e.target.value);
  }

  return (
    <StyledFilters onInput={range ? () => {} : handleChange}>
      <h4>{title}</h4>
      {filterList.map((item) => {
        const id = useId();
        return (
          <FilterWrapper key={id}>
            {range ? (
              <>
                <input
                  type='range'
                  name={title}
                  id={id}
                  value={filters.price}
                  min={0}
                  max={1000}
                  onInput={handleRange}
                />
                <span>$ {filters.price}</span>
              </>
            ) : (
              <>
                <input type='checkbox' name={title} id={id} value={item.value} />
                <label htmlFor={id}>{item.title}</label>
              </>
            )}
          </FilterWrapper>
        );
      })}
    </StyledFilters>
  );
}
