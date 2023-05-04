import { Link } from 'react-router-dom';
import Button from '../elements/Button.styled';
import { NavBar, HeaderContainer } from './Header.styled';

export default function Header() {
  return (
    <HeaderContainer>
      <NavBar>
        <div>LOGO</div>
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
        <div
          style={{
            backgroundColor: 'var(--snow)',
            borderRadius: '25px',
            padding: '0 0 0 20px',
          }}>
          <input type='text' style={{ width: '200px', fontSize: '1.5rem' }} />
          <Button>Search</Button>
        </div>
        <Link to='/login'>
          <Button>Sing in</Button>
        </Link>
      </NavBar>
    </HeaderContainer>
  );
}
