import { ENDPOINTS } from '@/config';
import { ProductError } from '@/errors/customErrors';
import { httpRequest } from '@/utils';

export async function fetchProducts({ query = '', options = {} }) {
  try {
    return await httpRequest(options, `${ENDPOINTS.GET_PRODUCTS}${query}`);
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new DOMException('La solicitud ha sido cancelada.', 'AbortError');
    }
    throw new ProductError(error.message);
  }
}

export async function fetchProductById({ id = '', options = {} }) {
  try {
    return await httpRequest(options, `${ENDPOINTS.GET_PRODUCT_BY_ID}/${id}`);
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new DOMException('La solicitud ha sido cancelada.', 'AbortError');
    }
    throw new ProductError(error.message);
  }
}

export async function fetchProductsPerPage(query) {
  try {
    const options = {};

    return await httpRequest(options, `${ENDPOINTS.GET_PRODUCTS}${query}`);
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new DOMException('La solicitud ha sido cancelada.', 'AbortError');
    }
    throw new ProductError(error.message);
  }
}
