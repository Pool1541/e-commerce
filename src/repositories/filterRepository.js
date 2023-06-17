import { ENDPOINTS } from '../config';
import { httpRequest } from '../utils';

export async function getFilters() {
  try {
    return await httpRequest(
      {},
      `${ENDPOINTS.GET_FILTERS_BY_NAME}?filters=category,brand,maxPrice`
    );
  } catch (error) {
    console.log(error);
  }
}
