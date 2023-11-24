import { Navigate, Outlet } from 'react-router-dom';
import { PUBLIC_ROUTES } from '../config/routes';
import useAuth from '../hooks/useAuth';

export default function AuthGuard() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate replace to={PUBLIC_ROUTES.LOGIN} />;
}
