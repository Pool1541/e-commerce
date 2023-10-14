import { ENDPOINTS } from '../config';
import { httpRequest } from '../utils';

export async function getCategories() {
  try {
    return await httpRequest({}, ENDPOINTS.GET_CATEGORIES);
  } catch (error) {
    console.log(error);
  }
}
