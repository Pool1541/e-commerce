import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import GlobalStyle from './assets/styles/GlobalStyles.js';
import AuthContextProvider from './context/AuthContext.jsx';
import BasketContextProvider from './context/BasketContext.jsx';
import FilterContextProvider from './context/FilterContext.jsx';
import ProductContextProvider from './context/ProductContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <FilterContextProvider>
      <ProductContextProvider>
        <BasketContextProvider>
          <App />
          <GlobalStyle />
        </BasketContextProvider>
      </ProductContextProvider>
    </FilterContextProvider>
  </AuthContextProvider>
);
