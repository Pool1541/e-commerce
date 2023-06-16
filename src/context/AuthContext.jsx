import { createContext, useEffect, useState } from 'react';
import { decodedJWT } from '../utils/decodedJWT';
import useLocalStorage from '../hooks/useLocalStorage';
import {
  getAuthTokenByRefreshToken,
  getUserById,
  loginUser,
  registerUser,
  removeRefreshToken,
} from '../repositories/AuthRepository';
import { errorHandler } from '../errors/errorHandler';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const isAuthenticatedKey = 'isAuthenticated';
  const userImageKey = 'userImage';
  const [authenticatedUser, setAuthtenticatedUser] = useState({});
  const [accessToken, setAccessToken] = useState({});
  const {
    storedValue: userImage,
    setValue: setUserImage,
    removeValue: removeUserImage,
  } = useLocalStorage(userImageKey, undefined);
  const { storedValue: isAuthenticated, setValue: setIsAuthenticated } = useLocalStorage(
    isAuthenticatedKey,
    false
  );

  async function authenticateUser(credentials, isRegistering = false) {
    try {
      const { user, stsTokenManager } = isRegistering
        ? await registerUser(credentials)
        : await loginUser(credentials);

      setAuthtenticatedUser(user);
      setUserImage(user.image);
      setAccessToken(stsTokenManager);
      setIsAuthenticated(true);

      return user;
    } catch (error) {
      errorHandler(error);
    }
  }

  async function getAuthenticatedUserInfo(token) {
    try {
      const { uid } = decodedJWT(token);
      const data = await getUserById(uid, token);
      setAuthtenticatedUser(data.user);
      setUserImage(data.user.image);
    } catch (error) {
      errorHandler(error);
    }
  }

  async function getNewAuthToken() {
    try {
      const { stsTokenManager } = await getAuthTokenByRefreshToken();
      setAccessToken(stsTokenManager);
      return stsTokenManager;
    } catch (error) {
      errorHandler(error);
      logout();
    }
  }

  async function logout() {
    try {
      await removeRefreshToken();
    } catch (error) {
      errorHandler(error);
    } finally {
      setAuthtenticatedUser({});
      setAccessToken({});
      setIsAuthenticated(false);
      removeUserImage(userImageKey);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        if (isAuthenticated) {
          const { token } = await getNewAuthToken();
          await getAuthenticatedUserInfo(token);
        }
      } catch (error) {
        if (error.name !== 'TypeError') console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authenticatedUser,
        accessToken,
        isAuthenticated,
        userImage,
        authenticateUser,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
