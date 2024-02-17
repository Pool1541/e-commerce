import { ENDPOINTS } from '../config';
import { httpRequest } from '../utils';

export async function getFilters({ category = '' }) {
  try {
    category = category && `&category=${category}`;

    return await httpRequest(
      {},
      `${ENDPOINTS.GET_FILTERS_BY_NAME}?filters=subCategory,brand${category}`
    );
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new DOMException('La solicitud ha sido cancelada.', 'AbortError');
    }
    console.log(error);
  }
}
