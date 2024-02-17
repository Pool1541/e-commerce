import { ENDPOINTS } from '../config';
import { httpRequest } from '../utils';
import { AuthError, UserError } from '../errors/customErrors';

export async function loginUser(body) {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      credentials: 'include',
    };

    return await httpRequest(options, ENDPOINTS.POST_LOGIN);
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new DOMException('La solicitud ha sido cancelada.', 'AbortError');
    }
    throw new AuthError(error.message);
  }
}

export async function registerUser(body) {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      credentials: 'include',
    };

    return await httpRequest(options, ENDPOINTS.POST_REGISTER);
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new DOMException('La solicitud ha sido cancelada.', 'AbortError');
    }
    throw new AuthError(error.message);
  }
}

export async function getUserById(uid, token) {
  try {
    const options = {
      headers: {
        Authorization: token,
      },
    };

    return await httpRequest(options, `${ENDPOINTS.GET_USER_BY_ID}/${uid}`);
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new DOMException('La solicitud ha sido cancelada.', 'AbortError');
    }
    throw new UserError(error.message);
  }
}

export async function getAuthTokenByRefreshToken() {
  try {
    const options = {
      credentials: 'include',
    };

    return await httpRequest(options, ENDPOINTS.GET_REFRESH_TOKEN);
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new DOMException('La solicitud ha sido cancelada.', 'AbortError');
    }
    throw new UserError(error.message);
  }
}

export async function removeRefreshToken() {
  try {
    const options = {
      credentials: 'include',
    };

    return await httpRequest(options, ENDPOINTS.GET_LOGOUT);
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new DOMException('La solicitud ha sido cancelada.', 'AbortError');
    }
    throw new UserError(error.message);
  }
}
