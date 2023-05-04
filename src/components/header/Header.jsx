import { Link } from 'react-router-dom';
import Button from '../elements/Button.styled';
import { NavBar, HeaderContainer } from './Header.styled';
import SearchBar from '../searchBar/SearchBar';
import NavLinks from '../navLinks/NavLinks';
import Logo from '../logo/Logo';
export default function Header() {
  return (
    <HeaderContainer>
      <NavBar>
        <Logo />
        <NavLinks />
        <SearchBar />
        <Link to='/login'>
          <Button>Sing in</Button>
        </Link>
      </NavBar>
    </HeaderContainer>
  );
}
