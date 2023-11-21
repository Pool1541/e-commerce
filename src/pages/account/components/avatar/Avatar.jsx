import { useRef, useState } from 'react';
import { ImagePreview, StyledAvatar, Uploader } from './Avatar.styled';
import useAuth from '../../../../hooks/useAuth';
import { updateUserImage } from '../../../../repositories/userRepository';

export default function Avatar() {
  const { userImage, authenticatedUser, accessToken, getAuthenticatedUserInfo } = useAuth();
  const [imageURL, setImageURL] = useState('');
  const ref = useRef();

  function handleClick() {
    if (ref) ref.current.click();
  }

  async function handleUpload(e) {
    const input = e.target;
    if (input.files.length) {
      const file = input.files[0];
      const formData = new FormData();
      formData.append('file', file);
      const headers = {
        Authorization: accessToken.token,
      };
      await updateUserImage({ id: authenticatedUser.uid, body: formData, headers });
      await getAuthenticatedUserInfo(accessToken.token);
      // const objectURL = URL.createObjectURL(file);
      // setImageURL(objectURL);
    }
  }

  return (
    <StyledAvatar>
      <ImagePreview>
        <img src={imageURL || userImage} alt='Preview' />
      </ImagePreview>
      <Uploader>
        <input
          type='file'
          accept='image/png, image/jpg, image/jpeg'
          ref={ref}
          onChange={handleUpload}
        />
        <button type='button' onClick={handleClick}>
          Cambiar imagen
        </button>
        <span>JPG o PNG. 1MB max.</span>
      </Uploader>
    </StyledAvatar>
  );
}
