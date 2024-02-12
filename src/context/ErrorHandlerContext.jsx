import { createContext, useCallback, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthError } from '../errors/customErrors';
import { PUBLIC_ROUTES } from '../config';

export const ErrorHandlerContext = createContext();

export default function ErrorHandlerProvider({ children }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const manageErrorRef = useRef();

  const manageError = useCallback(
    (error) => {
      if (error instanceof AuthError) {
        error.message.split(',').forEach((message) => {
          toast.error(message);
        });
      } else if (error.name === 'AbortError') {
      } else {
        if (!manageErrorRef.current) {
          navigate(PUBLIC_ROUTES.ERROR);
          manageErrorRef.current = true;
        }
      }
    },
    [navigate]
  );

  useEffect(() => {
    let timeout;

    if (pathname === PUBLIC_ROUTES.ERROR) {
      timeout = setTimeout(() => (manageErrorRef.current = null), 0);
    }

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <ErrorHandlerContext.Provider
      value={{
        manageError,
      }}>
      {children}
    </ErrorHandlerContext.Provider>
  );
}
