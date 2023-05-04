import { Link } from 'react-router-dom';
import Button from '../elements/Button.styled';
import { NavBar, HeaderContainer } from './Header.styled';
import SearchBar from '../searchBar/SearchBar';

export default function Header() {
  return (
    <HeaderContainer>
      <NavBar>
        <div>LOGO DE ECOMMERCE</div>
        <ul
          style={{
            display: 'flex',
            gap: '40px',
          }}>
          <li
            style={{
              color: 'var(--mahogany)',
            }}>
            <Link>Departments</Link>
          </li>
          <li
            style={{
              color: 'var(--mahogany)',
            }}>
            <Link>Specials</Link>
          </li>
          <li
            style={{
              color: 'var(--mahogany)',
            }}>
            <Link>Recipes</Link>
          </li>
        </ul>
        <SearchBar />
        <Link to='/login'>
          <Button>Sing in</Button>
        </Link>
      </NavBar>
    </HeaderContainer>
  );
}
