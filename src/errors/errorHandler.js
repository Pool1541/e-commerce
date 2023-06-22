import { toast } from 'sonner';
import { UserError, AuthError, ProductError } from './customErrors';

export function errorHandler(error) {
  if (error instanceof AuthError) {
    error.message.split(',').forEach((message) => {
      toast.error(message);
    });
  } else {
    console.log(error);
  }
}
