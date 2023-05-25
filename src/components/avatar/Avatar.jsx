import { useState } from 'react';
import ProfileOptions from '../profileOptions/ProfileOptions';
import { AvatarContainer } from './Avatart.styled';

export default function Avatar({ user }) {
  const avatarClassName = 'avatar-container';
  const [options, setOptions] = useState(false);
  const image = JSON.parse(localStorage.getItem('image')) || user?.image;

  function handleClick() {
    setOptions(!options);
  }

  return (
    <AvatarContainer className={avatarClassName}>
      <button title='User options' onClick={handleClick}>
        <img src={image} alt={user?.name} />
      </button>
      {options && (
        <ProfileOptions
          username={user?.username}
          classname={avatarClassName}
          handleClose={handleClick}
        />
      )}
    </AvatarContainer>
  );
}
