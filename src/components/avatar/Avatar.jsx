import ProfileOptions from '../profileOptions/ProfileOptions';
import { AvatarContainer } from './Avatart.styled';
import useAuth from '../../hooks/useAuth';
import useBoolean from '../../hooks/useBoolean';
import useOutsideClick from '../../hooks/useOutsideClick';

export default function Avatar({ user }) {
  const { value: options, setFalse, setToggle } = useBoolean(false);
  const { userImage: image } = useAuth();
  const ref = useOutsideClick(setFalse);

  return (
    <AvatarContainer ref={ref}>
      <button title='User options' onClick={setToggle}>
        <img src={image} alt={user?.name} />
      </button>
      {options && <ProfileOptions username={user?.username} />}
    </AvatarContainer>
  );
}
