import { ENDPOINTS } from '../config';
import { ProductError } from '../errors/customErrors';
import { httpRequest } from '../utils';

export async function fetchProducts({ query = '', options = {} }) {
  try {
    return await httpRequest(options, `${ENDPOINTS.GET_PRODUCTS}${query}`);
  } catch (error) {
    throw new ProductError(error.message);
  }
}

export async function fetchProductById({ id = '', options = {} }) {
  try {
    return await httpRequest(options, `${ENDPOINTS.GET_PRODUCT_BY_ID}/${id}`);
  } catch (error) {
    throw new ProductError(error.message);
  }
}

export async function searchProducts({ query = '', options = {} }) {
  try {
    return await httpRequest(options, `${ENDPOINTS.SEARCH_PRODUCTS}/?keyword=${query}`);
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
