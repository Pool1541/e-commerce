import { ErrorMessage, Field, Form, Formik } from 'formik';
import {
  FormBlock,
  FormWrapper,
  FormCaption,
  InputGroup,
} from '../../../../../../components/elements';
import Avatar from '../../../../components/avatar/Avatar';
import * as Yup from 'yup';
import { useState } from 'react';
import useAuth from '../../../../../../hooks/useAuth';
import { updateUser } from '../../../../../../repositories/userRepository';
import { toast } from 'sonner';

const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .required('Ingresa tu nombre')
    .min(3, 'Debe tener al menos 3 caracteres')
    .max(50, 'Máximo 50 caracteres'),
  username: Yup.string()
    .trim()
    .required('Ingresa tu nombre de usuario')
    .min(3, 'Debe tener al menos 3 caracteres')
    .max(50, 'Máximo 50 caracteres'),
  email: Yup.string()
    .trim()
    .required('Ingresa tu email')
    .max(50, 'Máximo 50 caracteres')
    .lowercase()
    .email('Debe ser un email válido'),
});

export default function PersonalInformation() {
  const [authError, setAuthError] = useState();
  const { authenticatedUser, accessToken } = useAuth();

  async function handleSubmit(values, { setSubmitting }) {
    try {
      const headers = {
        Authorization: accessToken.token,
      };
      await updateUser({ id: authenticatedUser.uid, body: values, headers });
      toast.success('Se aplicaron los cambios.');
    } catch (error) {
      setAuthError(error.message);
      toast.error(error.message);
    }
    setSubmitting(false);
  }

  return (
    <FormBlock>
      <FormCaption>
        <h2>Información personal</h2>
        <p>Use una dirección permanente donde pueda recibir correo.</p>
      </FormCaption>
      <Formik
        initialValues={{
          name: authenticatedUser.name || '',
          username: authenticatedUser.username || '',
          email: authenticatedUser.email || '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}>
        {({ isSubmitting }) => (
          <FormWrapper as={Form}>
            <Avatar />
            <InputGroup>
              <div>
                <label htmlFor='name'>Nombre</label>
                <Field type='text' id='name' name='name' required />
                <ErrorMessage component='span' name='name' />
              </div>
            </InputGroup>
            <InputGroup>
              <div>
                <label htmlFor='username'>Nombre de usuario</label>
                <Field type='text' id='username' name='username' required />
                <ErrorMessage component='span' name='username' />
              </div>
            </InputGroup>
            <InputGroup>
              <div>
                <label htmlFor='email'>Correo electrónico</label>
                <Field type='text' id='email' name='email' required disabled />
                <ErrorMessage component='span' name='email' />
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
