import { ENDPOINTS } from '../config';
import { httpRequest } from '../utils';

export async function getCategories({ options = {} }) {
  try {
    return await httpRequest(options, ENDPOINTS.GET_CATEGORIES);
  } catch (error) {
    throw new Error(error.message);
  }
}
