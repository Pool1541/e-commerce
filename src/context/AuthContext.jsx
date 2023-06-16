import { createContext, useEffect, useState } from 'react';
import { API_URL } from '../config';
import { decodedJWT } from '../utils/decodedJWT';
import useLocalStorage from '../hooks/useLocalStorage';

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
    const options = {
      headers: {
        Authorization: token,
      },
    };
    const response = await fetch(`${API_URL}/users/${uid}`, options);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error);
    }
    setAuthtenticatedUser(data.user);
    setUserImage(data.user.image);
  }

  async function getNewAuthToken() {
    const options = {
      credentials: 'include',
    };
    const response = await fetch(`${API_URL}/auth/refresh`, options);
    if (!response.ok) {
      return logout();
    }
    const { stsTokenManager } = await response.json();
    setAccessToken(stsTokenManager);
    return stsTokenManager;
  }

  async function logout() {
    try {
      await fetch(`${API_URL}/auth/logout`, {
        credentials: 'include',
      });
      setAuthtenticatedUser({});
      setAccessToken({});
      setIsAuthenticated(false);
      removeUserImage(userImageKey);
    } catch (error) {
      console.log(error);
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
