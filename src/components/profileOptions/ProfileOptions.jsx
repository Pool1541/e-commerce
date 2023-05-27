import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { GearIcon, LogoutIcon, UserIcon } from '../../assets/icons';
import { ProfileOptionsContainer } from './ProfileOptions.styled';
import { AuthContext } from '../../context/AuthContext';
import useOutsideClick from '../../hooks/useOutsideClick';

export default function ProfileOptions({ username, handleClose }) {
  const { logout } = useContext(AuthContext);
  const ref = useOutsideClick(handleClose);

  return (
    <ProfileOptionsContainer ref={ref}>
      <p>Welcome {username}</p>
      <ul>
        <li>
          <Link to='/dashboard'>
            <UserIcon />
            Perfil
          </Link>
        </li>
        <li>
          <Link to='/settings'>
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
