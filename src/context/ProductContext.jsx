import { createContext, useContext, useEffect, useState } from 'react';
import { fetchProducts } from '../repositories/productRepository';
import { buildQuery } from '../utils';
import { FilterContext } from './FilterContext';
import { errorHandler } from '../errors/errorHandler';

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState({ products: [] });
  const [loading, setLoading] = useState(true);
  const { filters } = useContext(FilterContext);

  async function loadProducts(abortController) {
    try {
      const query = buildQuery(filters);
      const data = await fetchProducts(query, abortController);
      setProducts(data);
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const abortController = new AbortController();
    loadProducts(abortController);

    return () => {
      abortController.abort();
    };
  }, [filters]);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
      }}>
      {children}
    </ProductContext.Provider>
  );
}
