import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import GlobalStyle from './assets/styles/GlobalStyles.js';
import AuthContextProvider from './context/AuthContext.jsx';
import BasketContextProvider from './context/BasketContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <BasketContextProvider>
      <App />
      <GlobalStyle />
    </BasketContextProvider>
  </AuthContextProvider>
);
