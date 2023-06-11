import { useContext, useId } from 'react';
import { FilterRange, FilterWrapper, StyledFilters } from './Filters.styled';
import { FilterContext } from '../../../../context/FilterContext';
import { CaretDownIcon } from '../../../../assets/icons';
import { useState } from 'react';

export default function Filters({ title, filterList, range = false }) {
  const { changeFilters } = useContext(FilterContext);
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
        return (
          <FilterWrapper key={item.title}>
            {range ? (
              <RangeInput inputData={item} controller={handleRange} />
            ) : (
              <CheckedInput inputData={item} title={title} />
            )}
          </FilterWrapper>
        );
      })}
    </StyledFilters>
  );
}

function CheckedInput({ inputData, title }) {
  const { filters } = useContext(FilterContext);
  const id = useId();
  const isChecked = filters[title].includes(inputData.value);

  return (
    <>
      <input type='checkbox' id={id} value={inputData.value} defaultChecked={isChecked} />
      <label htmlFor={id}>{inputData.title}</label>
    </>
  );
}

function RangeInput({ controller }) {
  const { filters } = useContext(FilterContext);
  return (
    <FilterRange>
      <input type='range' value={filters.maxPrice} min={0} max={5000} onInput={controller} />
      <span>$ {filters.maxPrice}</span>
    </FilterRange>
  );
}
