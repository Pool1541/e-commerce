import { toast } from 'sonner';
import { UserError, AuthError, ProductError } from './customErrors';

export function errorHandler(error) {
  if (error instanceof UserError) {
    console.log('User Error: ');
    console.log(error);
  } else if (error instanceof AuthError) {
    error.message.split(',').forEach((message) => {
      toast.error(message);
    });
  } else if (error instanceof ProductError) {
    console.log('Product Error: ');
    console.log(error);
  }
}
