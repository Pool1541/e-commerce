import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Product from './pages/product/Product';
import Departments from './pages/departments/Departments';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { PUBLIC_ROUTES } from './config';
import { Toaster } from 'sonner';

function App() {
  return (
    <Router>
      <Toaster richColors position='top-center' expand={true} closeButton />
      <Routes>
        <Route path={PUBLIC_ROUTES.HOME} element={<Home />} />
        <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />
        <Route path={PUBLIC_ROUTES.CATALOG} element={<Departments />} />
        <Route path={PUBLIC_ROUTES.PRODUCT} element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
