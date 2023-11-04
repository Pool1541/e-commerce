import { useId } from 'react';
import { FilterWrapper, StyledFilters } from './Filters.styled';
import { CaretDownIcon } from '../../../../assets/icons';
import { transformToTitleCase } from '../../../../utils';
import useBoolean from '../../../../hooks/useBoolean';
import useCheckedInput from '../../hooks/useCheckedInput';

const filterLabels = {
  subCategory: 'Sub categorías',
  brand: 'Marcas',
  maxPrice: 'Precio máximo',
};

export default function Filters({ title, filterList }) {
  const { value: open, setTrue: handleOpen, setToggle: handleToggle } = useBoolean(false);

  return (
    <StyledFilters open={open}>
      <button type='button' onClick={handleToggle}>
        <h4>{filterLabels[title]}</h4>
        <span>
          <CaretDownIcon />
        </span>
      </button>
      <div>
        {filterList.map((filter, index) => {
          return (
            <FilterWrapper key={index}>
              <CheckedInput label={filter} title={title} handleOpen={handleOpen} />
            </FilterWrapper>
          );
        })}
      </div>
    </StyledFilters>
  );
}

function CheckedInput({ label, title, handleOpen }) {
  const { ref, initialValue, handleChange } = useCheckedInput({ label, title, handleOpen });
  const transformedLabel = transformToTitleCase(label);
  const id = useId();

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
