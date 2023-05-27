import { useState } from 'react';
import { Main } from '../../components/elements/Main.styled';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import LoginForm from './components/loginForm/LoginForm';
import RegisterForm from './components/registerForm/RegisterForm';

export default function Login() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  console.log(isRegisterModalOpen);

  function toggleRegisterModal() {
    setIsRegisterModalOpen((prev) => !prev);
  }

  return (
    <>
      <Header />
      <Main>
        <LoginForm handleRegisterModal={toggleRegisterModal} />
        {isRegisterModalOpen && <RegisterForm handleRegisterModal={toggleRegisterModal} />}
      </Main>
      <Footer />
    </>
  );
}
