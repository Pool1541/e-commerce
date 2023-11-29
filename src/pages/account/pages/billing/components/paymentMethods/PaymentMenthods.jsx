import { FormBlock, FormCaption, FormWrapper } from '../../../../../../components/elements';
import PaymentMethod from './PaymentMethod';

export default function PaymentMenthods() {
  return (
    <FormBlock>
      <FormCaption>
        <h2>Métodos de pago</h2>
        <p>Verifica y elimina los métodos de pago registrados</p>
      </FormCaption>
      <FormWrapper as={'div'}>
        <PaymentMethod cardNumber={4556} creditCard={'visa'} />
        <PaymentMethod cardNumber={2665} creditCard={'americanExpress'} />
        <PaymentMethod cardNumber={5488} creditCard={'mastercard'} />
      </FormWrapper>
    </FormBlock>
  );
}
