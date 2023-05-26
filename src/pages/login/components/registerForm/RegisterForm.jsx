import * as Yup from 'yup';
import { toast } from 'sonner';
import { Formik } from 'formik';
import { useContext } from 'react';
import { RegisterFormBackground, RegisterFormContainer } from './RegisterForm.styled';
import { Button } from '../../../../components/elements/Button.styled';
import { StyledFormikField } from '../../../../components/elements/Input.styled';
import { handlerYupErrors, httpRequest } from '../../../../utils';
import { ENDPOINTS } from '../../../../config/endpoints';
import { AuthContext } from '../../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('name is required')
    .trim()
    .lowercase()
    .min(3, 'name needs to be at least 3 characters')
    .max(20, 'name must have a maximum of 20 characters')
    .matches(/^[a-zA-Z\sñ]+$/, 'name must only have letters'),
  username: Yup.string()
    .required('username is required')
    .trim()
    .min(6, 'username needs to be at least 6 characters')
    .max(20, 'username must have a maximum of 20 characters')
    .matches(
      /^[a-zA-Z0-9\sñ\-_]+$/,
      'username must have only letters, numbers, "-" and "_" characters'
    ),
  email: Yup.string().required('email is required').lowercase().email(),
  password: Yup.string()
    .required('password is required')
    .min(6, 'password must be at least 6 characters')
    .max(50, 'password must have a maximum of 20 characters'),
});

export default function RegisterForm() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleRegister(values, { setSubmitting }) {
    try {
      const validatedData = validationSchema.validateSync(values, { abortEarly: false });
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
        credentials: 'include',
      };
      const { user, stsTokenManager } = await httpRequest(options, ENDPOINTS.POST_REGISTER);
      toast.success(`Welcome ${user.username}`);
      login({ user, stsTokenManager });
      navigate('/');
    } catch (validationError) {
      if (!validationError.inner) return;
      handlerYupErrors(validationError);
    }
    setSubmitting(false);
  }
  return (
    <RegisterFormBackground>
      <Formik
        initialValues={{
          name: '',
          username: '',
          email: '',
          password: '',
        }}
        onSubmit={handleRegister}>
        <RegisterFormContainer>
          <h1>Register form</h1>
          <StyledFormikField type='text' placeholder='Name' name='name' />
          <StyledFormikField type='text' placeholder='Username' name='username' />
          <StyledFormikField type='text' placeholder='Email' name='email' />
          <StyledFormikField type='password' placeholder='Password' name='password' />
          <Button type='submit'>Login</Button>
        </RegisterFormContainer>
      </Formik>
    </RegisterFormBackground>
  );
}
