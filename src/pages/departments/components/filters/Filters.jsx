import { useContext, useId } from 'react';
import { FilterRange, FilterWrapper, StyledFilters } from './Filters.styled';
import { FilterContext } from '../../../../context/FilterContext';
import { CaretDownIcon } from '../../../../assets/icons';
import { useState } from 'react';

const filterLabels = {
  subCategory: 'Sub categorías',
  brand: 'Marcas',
  maxPrice: 'Precio máximo',
};

export default function Filters({ title, filterList, range = false }) {
  const { changeFilters } = useContext(FilterContext);
  const someFilterChecked = filterList.some(
    (filter) => filter.checked || (typeof filter.value === 'number' && filter.value > 0)
  );
  const [open, setOpen] = useState(someFilterChecked);

  function handleOpen(e) {
    e.preventDefault();
    setOpen(!open);
  }

  function handleChange(e) {
    const nodes = e.target.form.querySelectorAll('input');
    const filters = Array.from(nodes).reduce((acc, curr) => {
      let filterObject = {
        value: curr.value,
        checked: curr.checked,
      };
      acc.push(filterObject);
      return acc;
    }, []);

    changeFilters(title, filters);
  }

  function handleRangeChange(e) {
    const nodes = e.target.form.querySelectorAll('input');
    const filters = Array.from(nodes).reduce((acc, curr) => {
      let filterObject = {
        value: +curr.value,
        maxValue: curr.max,
        checked: false,
      };
      acc.push(filterObject);

      return acc;
    }, []);

    changeFilters(title, filters);
  }

  return (
    <StyledFilters onChange={range ? () => {} : handleChange} open={open}>
      <button onClick={handleOpen}>
        <h4>{filterLabels[title]}</h4>
        <span>
          <CaretDownIcon />
        </span>
      </button>
      <div>
        {filterList.map((item, index) => {
          return (
            <FilterWrapper key={index}>
              {range ? (
                <RangeInput inputData={item} controller={handleRangeChange} />
              ) : (
                <CheckedInput inputData={item} title={title} />
              )}
            </FilterWrapper>
          );
        })}
      </div>
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
  const { value, maxValue } = inputData;
  return (
    <FilterRange>
      <input type='range' defaultValue={value} min={0} max={maxValue} onChange={controller} />
      <span>$ {value}</span>
    </FilterRange>
  );
}
