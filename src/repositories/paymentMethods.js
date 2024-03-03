import { ENDPOINTS } from '../config';
import { httpRequest } from '../utils';

export async function fetchPaymentMethods({ query = '', options = {} }) {
  try {
    return await httpRequest(options, `${ENDPOINTS.GET_PAYMENT_METHODS}${query}`);
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new DOMException('La solicitud ha sido cancelada.', 'AbortError');
    }
    throw new Error(error.message);
  }
}

export async function createPaymentMethod({ body = {}, headers = {} }) {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
    };

    return await httpRequest(options, ENDPOINTS.CREATE_PAYMENT_METHOD);
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new DOMException('La solicitud ha sido cancelada.', 'AbortError');
    }
    throw new Error(error.message);
  }
}

export async function deletePaymentMethod({ id = '', headers = {} }) {
  try {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };

    return await httpRequest(options, `${ENDPOINTS.DELETE_PAYMENT_METHOD}/${id}`);
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new DOMException('La solicitud ha sido cancelada.', 'AbortError');
    }
    throw new Error(error.message);
  }
}
