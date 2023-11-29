import { AmericanExpressIcon, VisaIcon, MastercardIcon } from '../../../../../../assets/icons';
import {
  StyledPaymentMethod,
  PaymentMethodInfo,
  PaymentMethodLogo,
  PaymentMethodCardNumber,
  PaymentMethodActions,
} from './PaymentMethod.styled';

export default function PaymentMethod({ creditCard, cardNumber }) {
  const CREDIT_CARDS_LOGOS = {
    americanExpress: <AmericanExpressIcon />,
    visa: <VisaIcon />,
    mastercard: <MastercardIcon />,
  };

  return (
    <StyledPaymentMethod>
      <PaymentMethodInfo>
        <PaymentMethodLogo>{CREDIT_CARDS_LOGOS[creditCard]}</PaymentMethodLogo>
        <PaymentMethodCardNumber>
          <p>Terminada en {cardNumber}</p>
        </PaymentMethodCardNumber>
      </PaymentMethodInfo>
      <PaymentMethodActions>
        <button>Eliminar</button>
      </PaymentMethodActions>
    </StyledPaymentMethod>
  );
}
