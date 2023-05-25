import { useContext } from 'react';
import { toast } from 'sonner';
import * as Yup from 'yup';
import { Field, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthContext';
import { Container } from '../../../../components/elements/Container.styled';
import { Section } from '../../../../components/elements/Section.styled';
import { API_URL } from '../../../../context/AuthContext';
import { StyledLoginForm } from './LoginForm.styled';

const validationSchema = Yup.object({
  email: Yup.string().required('Email is required').email('Invalid email'),
  password: Yup.string().required('Password is required'),
});

async function sendAuthData(credentials) {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
      credentials: 'include',
    };
    const response = await fetch(`${API_URL}/auth/login`, options);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error);
    }
    return data;
  } catch (error) {
    error.message.split(',').forEach((message) => {
      toast.error(message);
    });
  }
}

export default function LoginForm() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleSubmit(values, { setSubmitting }) {
    try {
      validationSchema.validateSync(values, { abortEarly: false });
      const { user, stsTokenManager } = await sendAuthData(values);
      if (user) {
        toast.success(`Welcome ${user.username}`);
        login({ user, stsTokenManager });
        navigate('/');
      }
    } catch (validationError) {
      if (!validationError.inner) return;
      const fields = [];
      const errors = validationError?.inner?.reduce((result, error) => {
        if (!fields.includes(error.path)) {
          fields.push(error.path);
          result.push(error.message);
        }
        return result;
      }, []);
      errors.forEach((error) => toast.error(error));
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
            <Field type='text' placeholder='Email' name='email' />
            <Field type='password' placeholder='Password' name='password' />
            <button type='submit'>Login</button>
          </StyledLoginForm>
        </Formik>
      </Container>
    </Section>
  );
}
