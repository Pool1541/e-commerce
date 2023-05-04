import Home from './pages/home/Home';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
