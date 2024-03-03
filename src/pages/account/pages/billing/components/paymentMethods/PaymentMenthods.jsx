import { FormBlock, FormCaption, FormWrapper } from '../../../../../../components/elements';
import useAuth from '../../../../../../hooks/useAuth';
import useDataFetcher from '../../../../../../hooks/useDataFetcher';
import { fetchPaymentMethods } from '../../../../../../repositories/paymentMethods';
import useBilling from '../../hooks/useBilling';
import PaymentMethod from './PaymentMethod';
import SkeletonPaymentMethod from './SkeletonPaymentMethod';

export default function PaymentMenthods() {
  const { refetch } = useBilling();
  const { accessToken } = useAuth();

  const args = {
    options: {
      headers: {
        Authorization: accessToken.token,
      },
    },
  };
  const { data, loading } = useDataFetcher({
    fetcherFn: fetchPaymentMethods,
    args,
    canFetch: Boolean(accessToken.token),
    dependencies: [refetch],
  });

  return (
    <FormBlock style={{ minHeight: '250px' }}>
      <FormCaption>
        <h2>Métodos de pago</h2>
        <p>Verifica y elimina los métodos de pago registrados</p>
      </FormCaption>
      <FormWrapper as={'div'}>
        {loading ? (
          Array.from({ length: 2 }).map((_, index) => <SkeletonPaymentMethod key={index} />)
        ) : data.data.length > 0 ? (
          data?.data?.map((card) => (
            <PaymentMethod
              cardNumber={card.cardNumber}
              id={card._id}
              key={card._id}></PaymentMethod>
          ))
        ) : (
          <div
            style={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <span
              style={{
                fontWeight: 600,
                fontSize: '1.7rem',
                color: 'var(--p-color)',
              }}>
              No hay métodos de pago registrados
            </span>
          </div>
        )}
      </FormWrapper>
    </FormBlock>
  );
}
