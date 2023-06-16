import { toast } from 'sonner';

export function successAuth(user, navigate) {
  if (user) {
    toast.success(`Welcome ${user.username}`);
    navigate('/');
  }
}
