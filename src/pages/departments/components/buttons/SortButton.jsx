import { SortIcon } from '../../../../assets/icons';
import { Button } from '../../../../components/elements';
import { StyledSortButtonContainer } from './Buttons.styled';
import SortOptions from '../sortOptions/sortOptions';
import useBoolean from '../../../../hooks/useBoolean';
import useOutsideClick from '../../../../hooks/useOutsideClick';

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
