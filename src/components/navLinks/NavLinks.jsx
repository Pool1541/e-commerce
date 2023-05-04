import { Link } from 'react-router-dom';
import NavLinkContainer from './NavLinks.styled';

export default function NavLinks() {
  return (
    <NavLinkContainer>
      <li>
        <Link>Departments</Link>
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
