import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { NavBar, HeaderContainer, NavButtonGroup } from './Header.styled';
import { Button } from '../elements/Button.styled';
import SearchBar from '../searchBar/SearchBar';
import NavLinks from '../navLinks/NavLinks';
import Logo from '../logo/Logo';
import Avatar from '../avatar/Avatar';
import Basket from '../basket/Basket';

export default function Header() {
  const { authenticatedUser, isAuthenticated } = useContext(AuthContext);

  return (
    <HeaderContainer>
      <NavBar>
        <Logo />
        <NavLinks />
        <SearchBar />
        <NavButtonGroup>
          {isAuthenticated ? (
            <Avatar user={authenticatedUser} />
          ) : (
            <Link to='/login'>
              <Button>Sign in</Button>
            </Link>
          )}
          <Basket />
        </NavButtonGroup>
      </NavBar>
    </HeaderContainer>
  );
}
