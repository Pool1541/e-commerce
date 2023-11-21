import { ACCOUNT_ROUTES } from '../../config';
import { Container, Section } from '../../components/elements';
import { Main } from '../../components/elements/Main.styled';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Profile from './pages/profile/Profile';
import Billing from './pages/billing/Billing';
import Security from './pages/security/Security';
import Orders from './pages/orders/Orders';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ViewWrapper } from './components/elements';

export default function Account() {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <Section>
            <Sidebar />
            <ViewWrapper>
              <Routes>
                <Route path='/' element={<Navigate to={`${ACCOUNT_ROUTES.PROFILE}`} replace />} />
                <Route path={`${ACCOUNT_ROUTES.PROFILE}`} element={<Profile />} />
                <Route path={`${ACCOUNT_ROUTES.SECURITY}`} element={<Security />} />
                <Route path={`${ACCOUNT_ROUTES.BILLING}`} element={<Billing />} />
                <Route path={`${ACCOUNT_ROUTES.ORDERS}`} element={<Orders />} />
              </Routes>
            </ViewWrapper>
          </Section>
        </Container>
      </Main>
      <Footer />
    </>
  );
}
