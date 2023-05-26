import { Form } from 'formik';
import styled from 'styled-components';

export const StyledLoginForm = styled(Form)`
  min-width: 300px;
  max-width: 500px;
  padding: 40px;
  margin: auto;
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 15px;
  }

  h1 {
    text-align: center;
    margin-bottom: 25px;
    color: var(--mahogany);
  }
`;

export const LoginButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  button {
    margin-bottom: 10px;
    padding: 13px 0;
    border-radius: 15px;
  }
`;
