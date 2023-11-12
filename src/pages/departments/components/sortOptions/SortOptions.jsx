import { useSearchParams } from 'react-router-dom';
import { StyledSortOptions } from './SortOptions.styled';

export default function SortOptions({ onClick }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleAscending() {
    searchParams.set('sort', 'asc');
    setSearchParams(searchParams);
    onClick();
  }

  function handleDescending() {
    searchParams.set('sort', 'desc');
    setSearchParams(searchParams);
    onClick();
  }
  return (
    <StyledSortOptions>
      <button onClick={handleDescending}>Precio más alto</button>
      <button onClick={handleAscending}>Precio más bajo</button>
    </StyledSortOptions>
  );
}
