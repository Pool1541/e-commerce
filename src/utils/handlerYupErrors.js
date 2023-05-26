import { toast } from 'sonner';

export function handlerYupErrors(validationError) {
  const fields = [];
  const errors = validationError.inner.reduce((result, error) => {
    if (!fields.includes(error.path)) {
      fields.push(error.path);
      result.push(error.message);
    }
    return result;
  }, []);
  errors.forEach((error) => toast.error(error));
}
