import { SortIcon } from '../../../../assets/icons';
import { Button } from '../../../../components/elements';
import { StyledSortButtonContainer } from './Buttons.styled';

export default function SortButton() {
  return (
    <StyledSortButtonContainer>
      <Button>
        <SortIcon />
        <span>Ordenar</span>
      </Button>
    </StyledSortButtonContainer>
  );
}
