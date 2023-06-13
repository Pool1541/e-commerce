import Home from './pages/home/Home';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Departments from './pages/departments/Departments';
import { Toaster } from 'sonner';
import Product from './pages/product/Product';

function App() {
  return (
    <Router>
      <Toaster richColors position='top-center' expand={true} closeButton />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/departments' element={<Departments />} />
        <Route path='/product/:productID' element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
