import { Toaster } from 'sonner';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { PUBLIC_ROUTES } from './config';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Product from './pages/product/Product';
import Departments from './pages/departments/Departments';
import ScrollRestoration from './components/scrollRestoration/ScrollRestoration';
import FilterContextProvider from './context/FilterContext.jsx';
import ProductContextProvider from './context/ProductContext.jsx';
import GlobalStyle from './assets/styles/GlobalStyles.js';
import AuthContextProvider from './context/AuthContext.jsx';
import BasketContextProvider from './context/BasketContext.jsx';

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <BasketContextProvider>
          <FilterContextProvider>
            <ProductContextProvider>
              <ScrollRestoration />
              <Toaster richColors position='top-center' expand={true} closeButton />
              <Routes>
                <Route path={PUBLIC_ROUTES.HOME} element={<Home />} />
                <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />
                <Route path={`${PUBLIC_ROUTES.CATEGORY}/:categoryName`} element={<Departments />} />
                <Route path={`${PUBLIC_ROUTES.PRODUCT}/:productID`} element={<Product />} />
              </Routes>
              <GlobalStyle />
            </ProductContextProvider>
          </FilterContextProvider>
        </BasketContextProvider>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
