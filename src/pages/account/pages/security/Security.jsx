import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FormBlock, FormWrapper, FormCaption, InputGroup } from '../../../../components/elements';
import * as Yup from 'yup';
import { useState } from 'react';
import { changeUserPassword } from '../../../../repositories/userRepository';
import useAuth from '../../../../hooks/useAuth';
import { toast } from 'sonner';

const validationSchema = Yup.object({
  current_password: Yup.string()
    .required('Ingresa tu contraseña actual')
    .max(150, 'Máximo 150 caracteres'),
  new_password: Yup.string()
    .required('Ingresa tu nueva contraseña')
    .min(7, 'Al menos 7 caracteres')
    .max(150, 'Máximo 150 caracteres')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      'Debe incluir mayúscula, minúscula, número y caracter especial'
    ),
  confirm_password: Yup.string()
    .required('Confirma tu nueva contraseña')
    .oneOf([Yup.ref('new_password')], 'El valor no coincide con la nueva contraseña'),
});

export default function Security() {
  const [authError, setAuthError] = useState();
  const { authenticatedUser, accessToken } = useAuth();

  async function handleSubmit(values, { setSubmitting }) {
    try {
      const { current_password, new_password, confirm_password } = values;
      const headers = {
        Authorization: accessToken.token,
      };

      await changeUserPassword({
        body: { current_password, new_password, confirm_password },
        headers,
        id: authenticatedUser.uid,
      });
      toast.success('Se cambió la contraseña');
    } catch (error) {
      setAuthError(error);
      toast.error(error.message);
    }
    setSubmitting(false);
  }

  return (
    <FormBlock>
      <FormCaption>
        <h2>Contraseña</h2>
        <p>Cambia tu contraseña actual.</p>
      </FormCaption>
      <Formik
        initialValues={{
          current_password: '',
          new_password: '',
          confirm_password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({ errors, touched, isSubmitting }) => (
          <FormWrapper as={Form}>
            <InputGroup error={errors.current_password && touched.current_password}>
              <div>
                <label htmlFor='current_password'>Contraseña actual</label>
                <Field type='password' id='current_password' name='current_password' required />
                <ErrorMessage component='span' name='current_password' />
              </div>
            </InputGroup>
            <InputGroup error={errors.new_password && touched.nuevaContrasena}>
              <div>
                <label htmlFor='new_password'>Contraseña nueva</label>
                <Field type='password' id='new_password' name='new_password' required />
                <ErrorMessage component='span' name='new_password' />
              </div>
            </InputGroup>
            <InputGroup error={errors.confirm_password && touched.nuevaContrasena}>
              <div>
                <label htmlFor='confirm_password'>Confirma tu contraseña</label>
                <Field type='password' id='confirm_password' name='confirm_password' required />
                <ErrorMessage component='span' name='confirm_password' />
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
