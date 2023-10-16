import { ENDPOINTS } from '../config';
import { httpRequest } from '../utils';

export async function getFilters({ category = '' }) {
  try {
    category = category && `&category=${category}`;

    return await httpRequest(
      {},
      `${ENDPOINTS.GET_FILTERS_BY_NAME}?filters=subCategory,brand,maxPrice${category}`
    );
  } catch (error) {
    console.log(error);
  }
}
