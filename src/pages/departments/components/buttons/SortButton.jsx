import { StyledSortButtonContainer } from './Buttons.styled';
import SortOptions from '../sortOptions/SortOptions';
import { Button } from '@/components/elements';
import { useBoolean, useOutsideClick } from '@/hooks/';
import { SortIcon } from '@/assets/icons';

export default function SortButton() {
  const { value, setToggle, setFalse } = useBoolean();
  const ref = useOutsideClick(setFalse);

  return (
    <StyledSortButtonContainer ref={ref}>
      <Button onClick={setToggle}>
        <SortIcon />
        <span>Ordenar</span>
      </Button>
      {value && <SortOptions onClick={setFalse} />}
    </StyledSortButtonContainer>
  );
}
