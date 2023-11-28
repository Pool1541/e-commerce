import { ACCOUNT_ROUTES } from '../../config';
import { Container } from '../../components/elements';
import { Main } from '../../components/elements/Main.styled';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Profile from './pages/profile/Profile';
import Billing from './pages/billing/Billing';
import Security from './pages/security/Security';
import Orders from './pages/orders/Orders';
import { Route, Routes } from 'react-router-dom';
import { ViewWrapper } from './components/elements';
import { AccountSection } from './components/elements/AccountSection.styled';

export default function Account() {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <AccountSection>
            <Sidebar />
            <ViewWrapper>
              <Routes>
                <Route path={`${ACCOUNT_ROUTES.PROFILE}`} element={<Profile />} />
                <Route path={`${ACCOUNT_ROUTES.SECURITY}`} element={<Security />} />
                <Route path={`${ACCOUNT_ROUTES.BILLING}`} element={<Billing />} />
                <Route path={`${ACCOUNT_ROUTES.ORDERS}`} element={<Orders />} />
                <Route
                  path='*'
                  element={
                    <div>Parece que te haz perdido, por qué no pruebas volver al inicio ?</div>
                  }
                />
              </Routes>
            </ViewWrapper>
          </AccountSection>
        </Container>
      </Main>
      <Footer />
    </>
  );
}
