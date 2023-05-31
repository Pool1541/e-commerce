import { useContext } from 'react';
import { BasketContext } from '../context/BasketContext';

export default function useBasket() {
  return useContext(BasketContext);
}
