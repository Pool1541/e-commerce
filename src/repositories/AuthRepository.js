import { ENDPOINTS } from '../config';
import { httpRequest } from '../utils';
import { API_URL } from '../config';

export async function loginUser(body) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    credentials: 'include',
  };

  return await httpRequest(options, ENDPOINTS.POST_LOGIN);
}

export async function registerUser(body) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    credentials: 'include',
  };

  return await httpRequest(options, ENDPOINTS.POST_REGISTER);
}

export async function getUserById(uid, token) {
  try {
    const options = {
      headers: {
        Authorization: token,
      },
    };

    const response = await fetch(`${API_URL}/users/${uid}`, options);
    if (!response.ok) throw new Error(data.error);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getAuthTokenByRefreshToken(callback) {
  try {
    const options = {
      credentials: 'include',
    };

    const response = await fetch(`${API_URL}${ENDPOINTS.GET_REFRESH_TOKEN}`, options);
    if (!response.ok) {
      callback();
      throw new Error(response.error);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function removeRefreshToken() {
  try {
    const options = {
      credentials: 'include',
    };

    await fetch(`${API_URL}${ENDPOINTS.GET_LOGOUT}`, options);
  } catch (error) {
    console.log(error);
  }
}
