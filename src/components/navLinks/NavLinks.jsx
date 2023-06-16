import { Link } from 'react-router-dom';
import { PUBLIC_ROUTES } from '../../config';
import NavLinkContainer from './NavLinks.styled';

export default function NavLinks() {
  return (
    <NavLinkContainer>
      <li>
        <Link to={PUBLIC_ROUTES.CATALOG}>Departments</Link>
      </li>
      <li>
        <Link>Specials</Link>
      </li>
      <li>
        <Link>Recipes</Link>
      </li>
    </NavLinkContainer>
  );
}
