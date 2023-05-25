import styled from 'styled-components';

export const StyledLoginForm = styled.form`
  min-width: 300px;
  max-width: 600px;
  padding: 40px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: var(--mahogany);
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--mahogany);
    border-radius: 5px;
    margin-bottom: 10px;
  }

  button {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--mahogany);
    border-radius: 25px;
    margin-bottom: 10px;
    background: var(--mahogany);
    color: white;
    font-weight: bold;
  }
`;
