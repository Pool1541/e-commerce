import { ENDPOINTS } from '../config';
import { httpRequest } from '../utils';
import { UserError } from '../errors/customErrors';

export async function updateUser({ id, body, headers }) {
  try {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
      credentials: 'include',
    };

    return await httpRequest(options, `${ENDPOINTS.PUT_UPDATE_USER}/${id}`);
  } catch (error) {
    throw new UserError(error.message);
  }
}

export async function updateUserImage({ id, body, headers }) {
  try {
    const options = {
      method: 'POST',
      headers: {
        ...headers,
      },
      body: body,
      credentials: 'include',
    };

    return await httpRequest(options, `${ENDPOINTS.POST_UPDATE_USER_IMAGE}/${id}`);
  } catch (error) {
    throw new UserError(error.message);
  }
}

export async function changeUserPassword({ id, body, headers }) {
  try {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
      credentials: 'include',
    };

    return await httpRequest(options, `${ENDPOINTS.PATCH_CHANGE_PASSWORD}/${id}`);
  } catch (error) {
    throw new UserError(error.message);
  }
}
