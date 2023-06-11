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
      let filterObject = {
        value: +curr.value || curr.value,
        checked: (+curr.value && true) || curr.checked,
      };
      acc.push(filterObject);
      return acc;
    }, []);
    changeFilters(title, filters);
  }

  return (
    <StyledFilters onChange={range ? () => {} : handleChange} open={open}>
      <button onClick={handleOpen}>
        <h4>{title}</h4>
        <span>
          <CaretDownIcon />
        </span>
      </button>
      {filterList.map((item, index) => {
        return (
          <FilterWrapper key={index}>
            {range ? (
              <RangeInput inputData={item} controller={handleChange} />
            ) : (
              <CheckedInput inputData={item} title={title} />
            )}
          </FilterWrapper>
        );
      })}
    </StyledFilters>
  );
}

function CheckedInput({ inputData }) {
  const { checked, value } = inputData;
  const id = useId();

  return (
    <>
      <input type='checkbox' id={id} value={value} defaultChecked={checked} />
      <label htmlFor={id}>{value}</label>
    </>
  );
}

function RangeInput({ inputData, controller }) {
  const { value } = inputData;
  return (
    <FilterRange>
      <input type='range' defaultValue={value} min={0} max={5000} onChange={controller} />
      <span>$ {value}</span>
    </FilterRange>
  );
}
