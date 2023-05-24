import { useState } from 'react';
import { Container } from '../../../../components/elements/Container.styled';
import { Section } from '../../../../components/elements/Section.styled';
import { StyledLoginForm } from './LoginForm.styled';

export default function LoginForm() {
  const [token, setToken] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [cookie, setCookie] = useState();

  function showCookie() {
    const cookies = document.cookie;
    setCookie(cookies);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(undefined);
    const formData = new FormData(e.target);
    const entries = Object.fromEntries(formData);
    const user = await login(entries);
    if (user) {
      setToken(user.stsTokenManager.token);
    }

    async function login(credentials) {
      try {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
          withCredentrials: true,
          credentials: 'include',
        };
        const response = await fetch('http://localhost:3000/api/auth/login', options);
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error[0]);
        }
        return data;
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
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
        {loading ? (
          <div>Cargando...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div>Bienvenido {token}</div>
        )}
      </Container>
      <button onClick={showCookie}>Show Cookies</button>
      <div>{cookie}</div>
    </Section>
  );
}
