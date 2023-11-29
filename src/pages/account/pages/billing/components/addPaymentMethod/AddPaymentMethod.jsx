import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import {
  FormBlock,
  FormCaption,
  FormWrapper,
  InputGroup,
} from '../../../../../../components/elements';

const validationSchema = Yup.object({
  cardName: Yup.string()
    .required('El nombre de la tarjeta es obligatorio')
    .max(100, 'Máximo 100 caracteres'),
  cardNumber: Yup.string()
    .matches(/^\d{16}$/, 'El número de tarjeta debe contener 16 dígitos')
    .required('El número de tarjeta es obligatorio'),
  expirationDate: Yup.string()
    .matches(/^\d{2}\/\d{2}$/, 'La fecha de expiración debe tener el formato MM/AA')
    .required('La fecha de expiración es obligatoria'),
  securityCode: Yup.string()
    .matches(/^\d{3}$/, 'El código de seguridad debe contener 3 dígitos')
    .required('El código de seguridad es obligatorio'),
});

export default function AddPaymentMethod() {
  function handleSubmit(values, { setSubmitting }) {}
  return (
    <FormBlock>
      <FormCaption>
        <h2>Agregar método de pago</h2>
        <p>Registra un método de pago nuevo</p>
      </FormCaption>
      <Formik
        initialValues={{
          cardName: '',
          cardNumber: undefined,
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
                <Field type='text' id='cardName' name='cardName' required />
                <ErrorMessage component='span' name='cardName' />
              </div>
            </InputGroup>
            <InputGroup error={errors.new_password && touched.nuevaContrasena}>
              <div>
                <label htmlFor='cardNumber'>Número de la tarjeta</label>
                <Field type='number' id='cardNumber' name='cardNumber' required />
                <ErrorMessage component='span' name='cardNumber' />
              </div>
            </InputGroup>
            <InputGroup error={errors.confirm_password && touched.nuevaContrasena}>
              <div>
                <label htmlFor='expirationDate'>Fecha de expiración</label>
                <Field type='text' id='expirationDate' name='expirationDate' required />
                <ErrorMessage component='span' name='expirationDate' />
              </div>
              <div>
                <label htmlFor='securityCode'>Código de seguridad</label>
                <Field type='number' id='securityCode' name='securityCode' required />
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
