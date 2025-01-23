import { ENDPOINTS } from '@/config';
import { httpRequest } from '@/utils';

export async function getFilters({ category = '', keyword = '' }) {
  try {
    const query = category ? `&category=${category}` : `&keyword=${keyword}`;

    return await httpRequest(
      {},
      `${ENDPOINTS.GET_FILTERS_BY_NAME}?filters=subCategory,brand${query}`
    );
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new DOMException('La solicitud ha sido cancelada.', 'AbortError');
    }
    console.log(error);
  }
}
