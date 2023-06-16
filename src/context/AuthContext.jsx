import { createContext, useEffect, useState } from 'react';
import { decodedJWT } from '../utils/decodedJWT';
import useLocalStorage from '../hooks/useLocalStorage';
import {
  getAuthTokenByRefreshToken,
  getUserById,
  removeRefreshToken,
} from '../repositories/AuthRepository';

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

  function login({ stsTokenManager, user }) {
    setAuthtenticatedUser(user);
    setUserImage(user.image);
    setAccessToken(stsTokenManager);
    setIsAuthenticated(true);
  }

  async function getAuthenticatedUserInfo(token) {
    const { uid } = decodedJWT(token);
    const data = await getUserById(uid, token);
    setAuthtenticatedUser(data.user);
    setUserImage(data.user.image);
  }

  async function getNewAuthToken() {
    const { stsTokenManager } = await getAuthTokenByRefreshToken(logout);
    setAccessToken(stsTokenManager);
    return stsTokenManager;
  }

  async function logout() {
    try {
      await removeRefreshToken();
    } catch (error) {
      console.log(error);
    } finally {
      setAuthtenticatedUser({});
      setAccessToken({});
      setIsAuthenticated(false);
      removeUserImage(userImageKey);
    }
  }

  useEffect(() => {
    async function fetchData() {
      if (isAuthenticated) {
        const { token } = await getNewAuthToken();
        await getAuthenticatedUserInfo(token);
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
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
