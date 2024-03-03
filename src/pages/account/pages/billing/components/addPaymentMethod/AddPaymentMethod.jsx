import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toast } from 'sonner';
import * as Yup from 'yup';
import {
  FormBlock,
  FormCaption,
  FormWrapper,
  InputGroup,
} from '../../../../../../components/elements';
import useAuth from '../../../../../../hooks/useAuth';
import { createPaymentMethod } from '../../../../../../repositories/paymentMethods';
import { transformCard } from '../../../../../../utils';
import useBilling from '../../hooks/useBilling';

const validationSchema = Yup.object({
  cardName: Yup.string()
    .required('El nombre de la tarjeta es obligatorio')
    .min(5, 'El nombre de la tarjeta debe tener mínimo 5 caracteres')
    .max(100, 'El nombre de la tarjeta debe tener máximo 100 caracteres'),
  cardNumber: Yup.string()
    .matches(/^\d{15,16}$/, 'El número de tarjeta debe contener entre 15 y 16 dígitos')
    .required('El número de tarjeta es obligatorio'),
  expirationDate: Yup.string()
    .matches(/^\d{2}\/\d{2}$/, 'La fecha de expiración debe tener el formato MM/AA')
    .required('La fecha de expiración es obligatoria'),
  securityCode: Yup.string()
    .matches(/^\d{3}$/, 'El código de seguridad debe contener 3 dígitos')
    .required('El código de seguridad es obligatorio'),
});

export default function AddPaymentMethod() {
  const { refetchData } = useBilling();
  const { accessToken, authenticatedUser } = useAuth();
  async function handleSubmit(values, { setSubmitting, resetForm }) {
    try {
      const body = transformCard(values);
      body.user = authenticatedUser.uid;

      const headers = {
        Authorization: accessToken.token,
      };

      await createPaymentMethod({ body, headers });

      toast.success('Se ha creado el método de pago');

      refetchData();
      resetForm();
    } catch (error) {
      if (error instanceof Yup.ValidationError) handlerYupErrors(error);
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <FormBlock>
      <FormCaption>
        <h2>Agregar método de pago</h2>
        <p>Registra un método de pago nuevo</p>
      </FormCaption>
      <Formik
        initialValues={{
          cardName: '',
          cardNumber: '',
          expirationDate: '',
          securityCode: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({ errors, touched, isSubmitting }) => (
          <FormWrapper as={Form}>
            <InputGroup error={errors.current_password && touched.current_password}>
              <div>
                <label htmlFor='cardName'>Nombre de la tarjeta</label>
                <Field type='text' id='cardName' name='cardName' />
                <ErrorMessage component='span' name='cardName' />
              </div>
            </InputGroup>
            <InputGroup error={errors.new_password && touched.nuevaContrasena}>
              <div>
                <label htmlFor='cardNumber'>Número de la tarjeta</label>
                <Field type='text' id='cardNumber' name='cardNumber' />
                <ErrorMessage component='span' name='cardNumber' />
              </div>
            </InputGroup>
            <InputGroup error={errors.confirm_password && touched.nuevaContrasena}>
              <div>
                <label htmlFor='expirationDate'>Fecha de expiración</label>
                <Field type='text' id='expirationDate' name='expirationDate' />
                <ErrorMessage component='span' name='expirationDate' />
              </div>
              <div>
                <label htmlFor='securityCode'>Código de seguridad</label>
                <Field type='number' id='securityCode' name='securityCode' />
                <ErrorMessage component='span' name='securityCode' />
              </div>
            </InputGroup>
            <InputGroup>
              <button type='submit' disabled={isSubmitting}>
                Guardar
              </button>
            </InputGroup>
          </FormWrapper>
        )}
      </Formik>
    </FormBlock>
  );
}
