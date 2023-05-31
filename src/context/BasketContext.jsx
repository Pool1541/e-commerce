import { useState } from 'react';
import { createContext } from 'react';

export const BasketContext = createContext();
const initialValue = {
  products: [],
  quantity: 0,
  total: 0,
};

export default function BasketContextProvider({ children }) {
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket')) || initialValue);

  function addToBasket(product) {
    const basketClone = structuredClone(basket);
    const productInBasket = basketClone.products.find((item) => item.id === product.id);
    if (productInBasket) {
      productInBasket.quantity += 1;
    } else {
      basketClone.products.push({
        ...product,
        quantity: 1,
      });
    }
    setAndCalculateQuantity(basketClone);
  }

  function decreaseQuantity(product) {
    const basketClone = structuredClone(basket);
    const productInBasket = basketClone.products.find((item) => item.id === product.id);
    if (productInBasket.quantity > 1) {
      productInBasket.quantity -= 1;
      setAndCalculateQuantity(basketClone);
    } else {
      productInBasket.quantity -= 1;
      removeFromBasket(product);
    }
  }

  function removeFromBasket({ id }) {
    const basketClone = structuredClone(basket);
    const products = basketClone.products.filter((item) => item.id !== id);
    basketClone.products = products;
    setAndCalculateQuantity(basketClone);
  }

  function clearBasket() {
    localStorage.removeItem('basket', JSON.stringify(initialValue));
    setBasket(initialValue);
  }

  function setAndCalculateQuantity(basketClone) {
    let quantity = 0;
    basketClone.products.forEach((product) => (quantity += product.quantity));
    basketClone.quantity = quantity;
    localStorage.setItem('basket', JSON.stringify(basketClone));
    setBasket(basketClone);
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
