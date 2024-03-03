import { useState } from 'react';
import AddPaymentMethod from './components/AddPaymentMethod/AddPaymentMethod';
import PaymentMenthods from './components/paymentMethods/PaymentMenthods';
import BillingContextProvider from './context/BillingContext';

export default function Billing() {
  return (
    <BillingContextProvider>
      <PaymentMenthods />
      <AddPaymentMethod />
    </BillingContextProvider>
  );
}
