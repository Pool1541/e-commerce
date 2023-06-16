import * as Yup from 'yup';
import { Formik } from 'formik';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthContext';
import { handlerYupErrors } from '../../../../utils';
import { LoginButtonsContainer, StyledLoginForm } from './LoginForm.styled';
import { Container, Button, Section, StyledFormikField } from '../../../../components/elements';
import { successAuth } from '../utils/successAuth';

const validationSchema = Yup.object({
  email: Yup.string().required('Email is required').email('Invalid email'),
  password: Yup.string().required('Password is required'),
});

export default function LoginForm({ handleRegisterModal }) {
  const { authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleSubmit(values, { setSubmitting }) {
    try {
      validationSchema.validateSync(values, { abortEarly: false });
      const user = await authenticateUser(values);

      successAuth(user, navigate);
    } catch (validationError) {
      if (validationError instanceof Yup.ValidationError) handlerYupErrors(validationError);
    }
    setSubmitting(false);
  }

  return (
    <Section>
      <Container>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={handleSubmit}>
          <StyledLoginForm>
            <h1>Login form</h1>
            <StyledFormikField type='text' placeholder='Email' name='email' />
            <StyledFormikField type='password' placeholder='Password' name='password' />
            <LoginButtonsContainer>
              <Button type='submit'>Login</Button>
              <Button type='button' onClick={handleRegisterModal}>
                Sign up
              </Button>
            </LoginButtonsContainer>
          </StyledLoginForm>
        </Formik>
      </Container>
    </Section>
  );
}
