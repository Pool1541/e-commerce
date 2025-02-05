import { ENDPOINTS } from '@/config';
import { httpRequest } from '@/utils';

export async function getFilters({ query = '' }) {
  try {
    return await httpRequest({}, `${ENDPOINTS.GET_FILTERS_BY_NAME}${query}`);
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new DOMException('La solicitud ha sido cancelada.', 'AbortError');
    }
    console.log(error);
  }
}
