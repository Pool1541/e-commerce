import Home from './pages/home/Home';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Departments from './pages/departments/Departments';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/departments' element={<Departments />} />
      </Routes>
    </Router>
  );
}

export default App;
