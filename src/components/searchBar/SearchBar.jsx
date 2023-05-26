import SearchIcon from '../../assets/icons/Search.icon';
import { Button } from '../elements/Button.styled';
import SearchBarContainer from './SearchBar.styled';

export default function SearchBar() {
  return (
    <SearchBarContainer>
      <input type='text' />
      <Button>Search</Button>
      <SearchIcon />
    </SearchBarContainer>
  );
}
