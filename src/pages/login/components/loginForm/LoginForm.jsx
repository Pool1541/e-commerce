import { useContext } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthContext';
import { Container } from '../../../../components/elements/Container.styled';
import { Section } from '../../../../components/elements/Section.styled';
import { StyledLoginForm } from './LoginForm.styled';

export default function LoginForm() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = Object.fromEntries(formData);
    const { user, stsTokenManager } = await sendAuthData(entries);
    if (user) {
      console.log(user, stsTokenManager);
      toast.success(`Welcome ${user.username}`);
      login({ user, stsTokenManager });
      navigate('/');
    }

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
        const response = await fetch('http://localhost:3000/api/auth/login', options);
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
  }
  return (
    <Section>
      <Container>
        <StyledLoginForm onSubmit={handleSubmit}>
          <h1>Login Form</h1>
          <input type='text' placeholder='Email' name='email' />
          <input type='password' placeholder='Password' name='password' />
          <button type='submit'>Login</button>
        </StyledLoginForm>
      </Container>
    </Section>
  );
}
