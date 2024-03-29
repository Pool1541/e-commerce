import styled from 'styled-components';
import BREAKPOINTS from '../../assets/styles/breakPoints';

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  gap: 1.5rem;
  position: relative;

  @media screen and (${BREAKPOINTS.MOVIL_L}) {
    flex-direction: column;
  }

  > div {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
    color: var(--p-color);
    font-weight: 700;
  }

  input[type='text'],
  input[type='password'],
  input[type='email'],
  input[type='number'],
  textArea {
    width: 100%;
    border: none;
    resize: none;
    padding: 1rem 1rem;
    border-radius: 0.5rem;
    outline: ${({ error }) => (error ? '1px solid var(--error)' : '1px solid var(--gray-medium)')};
    color: var(--p-color);
    background-color: inherit;
    font-size: 1.6rem;

    &:focus {
      outline: ${({ error }) => (error ? '2px solid var(--error)' : '2px solid var(--mahogany)')};
    }

    &::placeholder {
      color: var(--gray);
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='number'] {
    appearance: none;
  }

  input:disabled {
    background-color: var(--gray-medium);
    cursor: not-allowed;
  }

  button:disabled {
    background-color: var(--gray-medium);
    transition: all 0.2s ease;
    color: var(--black);
    cursor: not-allowed;
  }

  textArea {
    height: 15rem;
  }

  button {
    font-weight: 500;
    background-color: var(--mahogany);
    color: var(--white);
    padding: 1.2rem 2rem;
    border-radius: 1rem;
  }

  button:disabled {
    background-color: var(--gray-medium);
    color: var(--black);
    cursor: not-allowed;
    transition: all 0.2s ease;
  }

  span {
    white-space: nowrap;
    font-size: clamp(1rem, 3.5vw, 1.3rem);
    position: absolute;
    right: 0;
    bottom: -2rem;
    color: var(--error);
  }
`;
