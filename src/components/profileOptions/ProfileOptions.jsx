import { Link } from 'react-router-dom';
import { GearIcon, LogoutIcon, UserIcon } from '../../assets/icons';
import { ProfileOptionsContainer } from './ProfileOptions.styled';
import useOutsideClick from '../../hooks/useOutsideClick';
import useAuth from '../../hooks/useAuth';
import { PRIVATE_ROUTES } from '../../config';

export default function ProfileOptions({ username, handleClose }) {
  const { logout } = useAuth();
  const ref = useOutsideClick(handleClose);

  return (
    <ProfileOptionsContainer ref={ref}>
      <p>Welcome {username}</p>
      <ul>
        <li>
          <Link to={PRIVATE_ROUTES.DASHBOARD}>
            <UserIcon />
            Perfil
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
