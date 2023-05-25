import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import GlobalStyle from './assets/styles/GlobalStyles.js';
import AuthContextProvider from './context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <App />
      <GlobalStyle />
    </AuthContextProvider>
  </StrictMode>
);
