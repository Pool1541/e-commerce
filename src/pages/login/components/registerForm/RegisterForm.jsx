import * as Yup from 'yup';
import { Formik } from 'formik';
import { RegisterFormBackground, RegisterFormContainer } from './RegisterForm.styled';
import { Button } from '../../../../components/elements/Button.styled';
import { StyledFormikField } from '../../../../components/elements/Input.styled';
import { handlerYupErrors } from '../../../../utils';
import { useNavigate } from 'react-router-dom';
import { successAuth } from '../utils/successAuth';
import useOutsideClick from '../../../../hooks/useOutsideClick';
import useAuth from '../../../../hooks/useAuth';

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

export default function RegisterForm({ handleRegisterModal }) {
  const { authenticateUser } = useAuth();
  const ref = useOutsideClick(handleRegisterModal);
  const navigate = useNavigate();

  async function handleRegister(values, { setSubmitting }) {
    try {
      const isRegistering = true;
      const validatedData = validationSchema.validateSync(values, { abortEarly: false });
      const user = await authenticateUser(validatedData, isRegistering);

      successAuth(user, navigate);
    } catch (validationError) {
      if (validationError instanceof Yup.ValidationError) handlerYupErrors(validationError);
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
        <RegisterFormContainer ref={ref}>
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
