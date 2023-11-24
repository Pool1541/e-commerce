import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { PRIVATE_ROUTES } from '../config';

export default function UnAuthGuard() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate replace to={PRIVATE_ROUTES.ACCOUNT} /> : <Outlet />;
}
