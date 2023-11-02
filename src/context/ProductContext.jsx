import { createContext, useContext, useEffect, useState } from 'react';
import { fetchProducts, searchProducts } from '../repositories/productRepository';
import { FilterContext } from './FilterContext';
import { errorHandler } from '../errors/errorHandler';
import { buildQuery } from '../utils';
import { usePagination } from '../hooks/usePagination';

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState({ products: [] });
  const [query, setQuery] = useState('');
  const [pages, setPages] = useState();
  const [currentPage, changeCurrentPage] = usePagination();
  const [loading, setLoading] = useState(true);
  const { filters, currentCategory } = useContext(FilterContext);

  async function search(options) {
    try {
      setLoading(true);
      const data = await searchProducts({ options, query });
      setProducts(data);
      getTotalPages(data);
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const abortController = new AbortController();
    const options = {
      signal: abortController.signal,
    };
    search(options);

    return () => abortController.abort();
  }, [query]);

  async function loadProducts(page = 1, options) {
    try {
      setLoading(true);
      let query = buildQuery(filters);
      query = query ? query + `&category=${currentCategory}` : `?category=${currentCategory}`;
      query = query ? `${query}&from=${(page - 1) * 20}` : `?from=${(page - 1) * 20}`;
      const data = await fetchProducts({ query, options });
      setProducts(data);
      getTotalPages(data);
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  }

  function getTotalPages(products) {
    const totalProducts = products.count;
    const totalPages = Math.ceil(totalProducts / 20);
    setPages(totalPages);
  }

  useEffect(() => {
    const abortController = new AbortController();
    const options = {
      signal: abortController.signal,
    };

    loadProducts(currentPage, options);

    return () => {
      abortController.abort();
    };
  }, [filters, currentPage]);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        pages,
        currentPage,
        setQuery,
        changeCurrentPage,
      }}>
      {children}
    </ProductContext.Provider>
  );
}
