import { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import {
  FormBlock,
  FormWrapper,
  FormCaption,
  InputGroup,
} from '../../../../../../components/elements';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  city: Yup.string()
    .trim()
    .required('Ingresa tu ciudad')
    .min(3, 'Debe tener al menos 3 caracteres')
    .max(50, 'Máximo 50 caracteres'),
  district: Yup.string()
    .trim()
    .required('Ingresa tu distito')
    .min(3, 'Debe tener al menos 3 caracteres')
    .max(50, 'Máximo 50 caracteres'),
  avenue: Yup.string()
    .trim()
    .required('Ingresa tu avenida')
    .min(3, 'Debe tener al menos 3 caracteres')
    .max(50, 'Máximo 50 caracteres'),
  address_number: Yup.string()
    .trim()
    .required('Ingresa tu número/manzana')
    .min(1, 'Debe tener al menos 1 caracter')
    .max(50, 'Máximo 50 caracteres'),
  department: Yup.string()
    .trim()
    .required('Ingresa tu dpto/lote')
    .min(1, 'Debe tener al menos 1 caracter')
    .max(50, 'Máximo 50 caracteres'),
  zip_code: Yup.string()
    .trim()
    .required('Ingresa tu código postal')
    .min(3, 'Debe tener al menos 3 caracteres')
    .max(50, 'Máximo 50 caracteres')
    .matches(/^\d+$/, 'Ingrese un número válido'),
});

export default function Address() {
  const [authError, setAuthError] = useState();

  async function handleSubmit(values, { setSubmitting }) {
    try {
      console.log(values);
    } catch (error) {
      setAuthError(error);
    }
    setSubmitting(false);
  }

  return (
    <FormBlock>
      <FormCaption>
        <h2>Dirección</h2>
        <p>Indique la dirección donde se enviarán sus productos.</p>
      </FormCaption>
      <Formik
        initialValues={{
          city: '',
          district: '',
          avenue: '',
          address_number: '',
          department: '',
          zip_code: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <FormWrapper as={Form}>
            <InputGroup>
              <div>
                <label htmlFor='city'>Ciudad</label>
                <Field type='text' id='city' name='city' required />
                <ErrorMessage component='span' name='city' />
              </div>
              <div>
                <label htmlFor='district'>Distrito</label>
                <Field type='text' id='district' name='district' required />
                <ErrorMessage component='span' name='district' />
              </div>
            </InputGroup>
            <InputGroup>
              <div>
                <label htmlFor='avenue'>Avenida/Calle</label>
                <Field type='text' id='avenue' name='avenue' required />
                <ErrorMessage component='span' name='avenue' />
              </div>
            </InputGroup>
            <InputGroup>
              <div>
                <label htmlFor='address_number'>Número/Manzana</label>
                <Field type='text' id='address_number' name='address_number' required />
                <ErrorMessage component='span' name='address_number' />
              </div>
              <div>
                <label htmlFor='department'>Dpto./Lote</label>
                <Field type='text' id='department' name='department' required />
                <ErrorMessage component='span' name='department' />
              </div>
              <div>
                <label htmlFor='zip_code'>Código postal</label>
                <Field type='text' id='zip_code' name='zip_code' required />
                <ErrorMessage component='span' name='zip_code' />
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
