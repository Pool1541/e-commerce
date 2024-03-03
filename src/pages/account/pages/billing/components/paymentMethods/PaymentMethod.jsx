import { toast } from 'sonner';
import { AmericanExpressIcon, VisaIcon, MastercardIcon } from '../../../../../../assets/icons';
import useAuth from '../../../../../../hooks/useAuth';
import { deletePaymentMethod } from '../../../../../../repositories/paymentMethods';
import {
  StyledPaymentMethod,
  PaymentMethodInfo,
  PaymentMethodLogo,
  PaymentMethodCardNumber,
  PaymentMethodActions,
} from './PaymentMethod.styled';
import useBilling from '../../hooks/useBilling';

export default function PaymentMethod({ id, cardNumber }) {
  const { refetchData } = useBilling();
  const { accessToken } = useAuth();

  const CREDIT_CARDS_LOGOS = {
    3: <AmericanExpressIcon />,
    4: <VisaIcon />,
    5: <MastercardIcon />,
  };

  const endsWidth = cardNumber.slice(-4);

  async function remove() {
    try {
      const headers = {
        Authorization: accessToken.token,
      };

      await deletePaymentMethod({ id, headers });

      refetchData();
      toast.info('Se eliminó el método de pago');
    } catch (error) {
      toast.error('No se pudo eliminar el método de pago');
      console.log(error);
    }
  }

  return (
    <StyledPaymentMethod>
      <PaymentMethodInfo>
        <PaymentMethodLogo>{CREDIT_CARDS_LOGOS[cardNumber[0]]}</PaymentMethodLogo>
        <PaymentMethodCardNumber>
          <p>Terminada en {endsWidth}</p>
        </PaymentMethodCardNumber>
      </PaymentMethodInfo>
      <PaymentMethodActions>
        <button onClick={remove}>Eliminar</button>
      </PaymentMethodActions>
    </StyledPaymentMethod>
  );
}
