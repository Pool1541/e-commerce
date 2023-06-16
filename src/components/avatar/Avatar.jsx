import { useState } from 'react';
import ProfileOptions from '../profileOptions/ProfileOptions';
import { AvatarContainer } from './Avatart.styled';
import useAuth from '../../hooks/useAuth';

export default function Avatar({ user }) {
  const [options, setOptions] = useState(false);
  const { userImage: image } = useAuth();

  function handleClick() {
    setOptions(!options);
  }

  return (
    <AvatarContainer>
      <button title='User options' onClick={handleClick}>
        <img src={image} alt={user?.name} />
      </button>
      {options && <ProfileOptions username={user?.username} handleClose={handleClick} />}
    </AvatarContainer>
  );
}
