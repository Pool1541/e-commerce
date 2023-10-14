import { useState } from 'react';

function useQuantity(initialQuantity = 0) {
  const [quantity, setQuantity] = useState(initialQuantity);

  function increment() {
    setQuantity((prev) => prev + 1);
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  }

  function reset() {
    setQuantity(initialQuantity);
  }

  function set(value) {
    setQuantity(value);
  }

  return { quantity, increment, decrement, reset, set };
}

export default useQuantity;
