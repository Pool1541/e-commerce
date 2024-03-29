import { Link } from 'react-router-dom';
import { GearIcon, LogoutIcon, UserIcon } from '../../assets/icons';
import { ProfileOptionsContainer } from './ProfileOptions.styled';
import useAuth from '../../hooks/useAuth';
import { ACCOUNT_ROUTES, PRIVATE_ROUTES } from '../../config';

export default function ProfileOptions({ ref, username }) {
  const { logout } = useAuth();

  return (
    <ProfileOptionsContainer ref={ref}>
      <p>Welcome {username}</p>
      <ul>
        <li>
          <Link to={PRIVATE_ROUTES.ACCOUNT + '/' + ACCOUNT_ROUTES.PROFILE}>
            <UserIcon />
            Mi cuenta
          </Link>
        </li>
        <li>
          <Link to={PRIVATE_ROUTES.SETTINGS}>
            <GearIcon />
            Ajustes
          </Link>
        </li>
        <li>
          <Link onClick={logout}>
            <LogoutIcon />
            Salir
          </Link>
        </li>
      </ul>
    </ProfileOptionsContainer>
  );
}
