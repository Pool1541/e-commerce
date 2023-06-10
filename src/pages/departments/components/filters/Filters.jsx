import { useContext, useId } from 'react';
import { FilterRange, FilterWrapper, StyledFilters } from './Filters.styled';
import { FilterContext } from '../../../../context/FilterContext';
import { CaretDownIcon } from '../../../../assets/icons';
import { useState } from 'react';

export default function Filters({ title, filterList, range = false }) {
  const { filters, changeFilters } = useContext(FilterContext);
  const [open, setOpen] = useState(false);

  function handleOpen(e) {
    e.preventDefault();
    setOpen(!open);
  }

  function handleChange(e) {
    const nodes = e.target.form.querySelectorAll('input');
    const filters = Array.from(nodes).reduce((acc, curr) => {
      if (curr.checked) acc.push(curr.value);
      return acc;
    }, []);
    changeFilters(title, filters);
  }

  function handleRange(e) {
    changeFilters(title, Number(e.target.value));
  }

  return (
    <StyledFilters onInput={range ? () => {} : handleChange} open={open}>
      <button onClick={handleOpen}>
        <h4>{title}</h4>
        <span>
          <CaretDownIcon />
        </span>
      </button>
      {filterList.map((item) => {
        const id = useId();
        return (
          <FilterWrapper key={id}>
            {range ? (
              <FilterRange>
                <input
                  type='range'
                  name={title}
                  id={id}
                  value={filters.maxPrice}
                  min={0}
                  max={5000}
                  onInput={handleRange}
                />
                <span>$ {filters.maxPrice}</span>
              </FilterRange>
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
