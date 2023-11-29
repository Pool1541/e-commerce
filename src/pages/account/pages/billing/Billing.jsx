import AddPaymentMethod from './components/addPaymentMethod/AddPaymentMethod';
import PaymentMenthods from './components/paymentMethods/PaymentMenthods';

export default function Billing() {
  return (
    <>
      <PaymentMenthods />
      <AddPaymentMethod />
    </>
  );
}
