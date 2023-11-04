import { useEffect, useId, useRef } from 'react';
import { FilterWrapper, StyledFilters } from './Filters.styled';
import { CaretDownIcon } from '../../../../assets/icons';
import { useState } from 'react';
import { transformToTitleCase } from '../../../../utils';
import { useSearchParams } from 'react-router-dom';

const filterLabels = {
  subCategory: 'Sub categorías',
  brand: 'Marcas',
  maxPrice: 'Precio máximo',
};

export default function Filters({ title, filterList }) {
  const [open, setOpen] = useState(false);

  function handleOpen(e) {
    e.preventDefault();
    setOpen(!open);
  }

  return (
    <StyledFilters open={open}>
      <button onClick={handleOpen}>
        <h4>{filterLabels[title]}</h4>
        <span>
          <CaretDownIcon />
        </span>
      </button>
      <div>
        {filterList.map((filter, index) => {
          return (
            <FilterWrapper key={index}>
              <CheckedInput label={filter} title={title} />
            </FilterWrapper>
          );
        })}
      </div>
    </StyledFilters>
  );
}

function CheckedInput({ label, title }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialValue = searchParams.get(title)?.includes(label);
  const transformedLabel = transformToTitleCase(label);
  const ref = useRef();
  const id = useId();

  function handleChange() {
    const isChecked = ref.current.checked;

    if (isChecked) {
      let params = searchParams.get(title);
      params = params ? params.split(',').concat(label).join(',') : label;

      searchParams.set(title, params);
    } else {
      let params = searchParams.get(title);
      params = params
        .split(',')
        .filter((param) => param !== label)
        .join(',');

      params ? searchParams.set(title, params) : searchParams.delete(title);
    }

    searchParams.delete('page');
    setSearchParams(searchParams);
  }

  useEffect(() => {
    const params = searchParams.get(title);

    params && params.includes(label) ? (ref.current.checked = true) : (ref.current.checked = false);
  }, [searchParams]);

  return (
    <>
      <input
        type='checkbox'
        ref={ref}
        id={id}
        value={label}
        defaultChecked={initialValue}
        onChange={handleChange}
      />
      <label htmlFor={id}>{transformedLabel}</label>
    </>
  );
}
