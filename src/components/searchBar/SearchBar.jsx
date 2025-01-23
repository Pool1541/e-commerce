import { useNavigate } from 'react-router-dom';
import SearchBarContainer from './SearchBar.styled';
import { Button } from '@/components/elements';
import { SearchIcon } from '@/assets/icons';

export default function SearchBar() {
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const keyword = event.target.querySelector('input').value.trim();

    if (keyword) {
      navigate(`/search?keyword=${keyword}`);
    }
  }

  return (
    <SearchBarContainer onSubmit={handleSubmit}>
      <input type='text' />
      <Button>Search</Button>
      <SearchIcon />
    </SearchBarContainer>
  );
}
