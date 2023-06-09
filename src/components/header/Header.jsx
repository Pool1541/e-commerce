import { Link } from 'react-router-dom';
import { NavBar, HeaderContainer, NavButtonGroup } from './Header.styled';
import { Button } from '../elements/Button.styled';
import SearchBar from '../searchBar/SearchBar';
import NavLinks from '../navLinks/NavLinks';
import Logo from '../logo/Logo';
import Avatar from '../avatar/Avatar';
import Basket from '../basket/Basket';
import useAuth from '../../hooks/useAuth';
import { PUBLIC_ROUTES } from '../../config';

export default function Header() {
  const { authenticatedUser, isAuthenticated } = useAuth();

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
            <Link to={PUBLIC_ROUTES.LOGIN}>
              <Button>Sign in</Button>
            </Link>
          )}
          <Basket />
        </NavButtonGroup>
      </NavBar>
    </HeaderContainer>
  );
}
