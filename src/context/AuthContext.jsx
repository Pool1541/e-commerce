import { createContext, useEffect, useState } from 'react';
import { decodedJWT } from '../utils/decodedJWT';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticatedUser, setAuthtenticatedUser] = useState({});
  const [accessToken, setAccessToken] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem('isAuthenticated')) || false
  );

  function login({ stsTokenManager, user }) {
    setAuthtenticatedUser(user);
    localStorage.setItem('image', JSON.stringify(user.image));
    setAccessToken(stsTokenManager);
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', true);
  }

  async function getAuthenticatedUserInfo(token) {
    const { uid } = decodedJWT(token);
    const options = {
      headers: {
        Authorization: token,
      },
    };
    const response = await fetch(`http://localhost:3000/api/users/${uid}`, options);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error);
    }
    setAuthtenticatedUser(data.user);
    localStorage.setItem('image', JSON.stringify(data.user.image));
  }

  async function getNewAuthToken() {
    const options = {
      credentials: 'include',
    };
    const response = await fetch('http://localhost:3000/api/auth/refresh', options);
    if (!response.ok) {
      return logout();
    }
    const { stsTokenManager } = await response.json();
    setAccessToken(stsTokenManager);
    return stsTokenManager;
  }

  async function logout() {
    try {
      await fetch('http://localhost:3000/api/auth/logout', {
        credentials: 'include',
      });
      setAuthtenticatedUser({});
      setAccessToken({});
      setIsAuthenticated(false);
      localStorage.setItem('isAuthenticated', JSON.stringify(false));
      localStorage.removeItem('image');
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
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
