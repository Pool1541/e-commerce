import { Navigate, Outlet } from 'react-router-dom';
import { ACCOUNT_ROUTES, PRIVATE_ROUTES } from '../config';
import useAuth from '../hooks/useAuth';

export default function UnAuthGuard() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Navigate replace to={PRIVATE_ROUTES.ACCOUNT + '/' + ACCOUNT_ROUTES.PROFILE} />
  ) : (
    <Outlet />
  );
}
