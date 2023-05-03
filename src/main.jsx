import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import GlobalStyle from './assets/styles/GlobalStyles.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <GlobalStyle />
  </StrictMode>
);
