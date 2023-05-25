import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { GearIcon, LogoutIcon, UserIcon } from '../../assets/icons';
import { ProfileOptionsContainer } from './ProfileOptions.styled';
import { AuthContext } from '../../context/AuthContext';

export default function ProfileOptions({ username, classname, handleClose }) {
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    function handleClick(e) {
      const container = document.getElementsByClassName(classname)[0];
      if (!container.contains(e.target)) {
        handleClose();
      }
    }
    window.addEventListener('click', handleClick);

    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <ProfileOptionsContainer>
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
