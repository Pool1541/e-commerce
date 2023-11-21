import styled from 'styled-components';

export const StyledAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const ImagePreview = styled.div`
  width: 9.6rem;
  height: 9.6rem;
  border-radius: 0.8rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Uploader = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  input {
    display: none;
  }

  button {
    font-weight: 500;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.8rem;
    background-color: ${({ important }) => (important ? 'var(--mahogany)' : 'var(--mahogany)')};
    border: 1px solid var(--primary-transparent);
    color: ${({ important }) => (important ? 'var(--white)' : 'var(--white)')};
    padding: 1rem 2rem;
    transition: all 0.2s linear;
  }

  span {
    font-size: 1.3rem;
    color: var(--text-contrast);
  }
`;
