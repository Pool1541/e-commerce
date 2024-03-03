import { useContext } from 'react';
import { BillingContext } from '../context/BillingContext';

export default function useBilling() {
  const { refetch, refetchData } = useContext(BillingContext);

  return {
    refetch,
    refetchData,
  };
}
