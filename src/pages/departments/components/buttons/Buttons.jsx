import FilterIcon from '../../../../assets/icons/Filter.icon';
import { Button } from '../../../../components/elements/Button.styled';
import useFilterSidebar from '../../hooks/useFilterSidebar';
import { StyledButtonsContainer } from './Buttons.styled';
import SortButton from './SortButton';

export default function Buttons() {
  const { toggleFilterSidebar } = useFilterSidebar();
  return (
    <StyledButtonsContainer>
      <Button onClick={toggleFilterSidebar}>
        <FilterIcon />
        Filtrar
      </Button>
      <SortButton />
    </StyledButtonsContainer>
  );
}
