import { Main } from '../../components/elements/Main.styled';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import LoginForm from './components/loginForm/LoginForm';

export default function Login() {
  return (
    <>
      <Header />
      <Main>
        <LoginForm />
      </Main>
      <Footer />
    </>
  );
}
