import { Form } from 'formik';
import styled from 'styled-components';

export const RegisterFormBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000057;
`;

export const RegisterFormContainer = styled(Form)`
  min-width: 300px;
  max-width: 500px;
  padding: 40px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: 20px;
  background-color: white;

  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: var(--mahogany);
  }

  button {
    margin-top: 20px;
    padding: 13px 0;
    border-radius: 15px;
  }
`;
