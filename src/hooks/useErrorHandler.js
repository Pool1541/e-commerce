import { useNavigate } from 'react-router-dom';
import { AuthError } from '../errors/customErrors';

export default function useErrorHandler() {
  const navigate = useNavigate();

  function manageError(error) {
    if (error instanceof AuthError) {
      error.message.split(',').forEach((message) => {
        toast.error(message);
      });
    } else {
      console.log(error);
      navigate('/server-error');
    }
  }

  return manageError;
}
