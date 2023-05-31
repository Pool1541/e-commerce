import { useState } from 'react';
import { createContext } from 'react';

export const BasketContext = createContext();
const initialValue = {
  products: [],
  quantity: 0,
  total: 0,
};

export default function BasketContextProvider({ children }) {
  const [basket, setBasket] = useState(initialValue);

  function addToBasket(product) {
    const basketClone = structuredClone(basket);
    const productInBasket = basketClone.products.find((item) => item.id === product.id);

    if (productInBasket) {
      productInBasket.quantity += 1;
      localStorage.setItem('basket', JSON.stringify(basketClone));
      setBasket(basketClone);
    } else {
      basketClone.products.push({
        ...product,
        quantity: 1,
      });
      localStorage.setItem('basket', JSON.stringify(basketClone));
      setBasket(basketClone);
    }
  }

  function decreaseQuantity(product) {
    const basketClone = structuredClone(basket);
    const productInBasket = basketClone.find((item) => item.id === product.id);
    if (productInBasket.quantity > 1) {
      productInBasket.quantity -= 1;
      localStorage.setItem('basket', JSON.stringify(productInBasket));
      setBasket(basketClone);
    } else {
      removeFromBasket(product);
    }
  }

  function removeFromBasket(product) {
    const basketClone = structuredClone(basket);
    const products = basketClone.products.filter((item) => item.id !== product.id);
    basketClone.products = products;
    localStorage.setItem('basket', JSON.stringify(basketClone));
    setBasket(basketClone);
  }

  function clearBasket() {
    localStorage.removeItem('basket', JSON.stringify(initialValue));
    setBasket(initialValue);
  }

  return (
    <BasketContext.Provider
      value={{
        basket,
        addToBasket,
        decreaseQuantity,
        removeFromBasket,
        clearBasket,
      }}>
      {children}
    </BasketContext.Provider>
  );
}
