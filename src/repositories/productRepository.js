import { ENDPOINTS } from '../config';
import { ProductError } from '../errors/customErrors';
import { httpRequest } from '../utils';

export async function fetchProducts(query, abortController) {
  try {
    const options = {
      signal: abortController.signal,
    };
    return await httpRequest(options, `${ENDPOINTS.GET_PRODUCTS}${query}`);
  } catch (error) {
    throw new ProductError(error.message);
  }
}

export async function fetchProductsPerPage(query) {
  try {
    const options = {};

    return await httpRequest(options, `${ENDPOINTS.GET_PRODUCTS}${query}`);
  } catch (error) {
    throw new ProductError(error.message);
  }
}
