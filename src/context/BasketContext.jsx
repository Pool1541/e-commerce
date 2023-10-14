import { createContext } from 'react';
import { toFixed } from '../utils';
import useLocalStorage from '../hooks/useLocalStorage';

export const BasketContext = createContext();
const initialValue = {
  products: [],
  quantity: 0,
  subTotal: 0,
  discounts: 0,
  total: 0,
};

export default function BasketContextProvider({ children }) {
  const basketKey = 'basket';
  const { storedValue: basket, setValue: setBasket } = useLocalStorage(basketKey, initialValue);

  function addToBasket(product) {
    const basketClone = structuredClone(basket);
    const { id, quantity = 1 } = product;
    const productInBasket = basketClone.products.find((item) => item.id === id);
    if (productInBasket) {
      productInBasket.quantity += quantity;
    } else {
      basketClone.products.push({
        ...product,
        quantity,
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
    setBasket(initialValue);
  }

  function setAndCalculateQuantity(basketClone) {
    let quantity = 0;
    basketClone.products.forEach((product) => (quantity += product.quantity));
    basketClone.quantity = quantity;
    calculateSubtotal(basketClone);
  }

  function calculateSubtotal(basketClone) {
    const result = basketClone.products.reduce(
      (acc, curr) => {
        acc.subTotal = toFixed(acc.subTotal + curr.price * curr.quantity);
        acc.discounts = toFixed(
          curr.discount
            ? acc.discounts + ((curr.price * curr.discount) / 100) * curr.quantity
            : acc.discounts
        );

        acc.total = toFixed(acc.subTotal - acc.discounts);
        return acc;
      },
      {
        subTotal: 0,
        discounts: 0,
        total: 0,
      }
    );

    setBasket({ ...basketClone, ...result });
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
