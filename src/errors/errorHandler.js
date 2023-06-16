import { toast } from 'sonner';
import { UserError, AuthError } from './customErrors';

export function errorHandler(error) {
  if (error instanceof UserError) {
    console.log(error);
  }

  if (error instanceof AuthError) {
    error.message.split(',').forEach((message) => {
      toast.error(message);
    });
  }
}
