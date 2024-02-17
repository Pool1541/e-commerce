import { ENDPOINTS } from '../config';
import { httpRequest } from '../utils';

export async function getCategories({ options = {} }) {
  try {
    return await httpRequest(options, ENDPOINTS.GET_CATEGORIES);
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new DOMException('La solicitud ha sido cancelada.', 'AbortError');
    }
    throw new Error(error.message);
  }
}
