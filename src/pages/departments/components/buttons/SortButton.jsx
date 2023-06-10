import { SortIcon } from '../../../../assets/icons';
import { Button } from '../../../../components/elements';
import { StyledSortButtonContainer } from './Buttons.styled';

export default function SortButton() {
  return (
    <StyledSortButtonContainer>
      <span>Ordenar por:</span>
      <Button>
        <SortIcon />
      </Button>
    </StyledSortButtonContainer>
  );
}
