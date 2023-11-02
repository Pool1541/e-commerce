import { createContext, useContext, useEffect, useState } from 'react';
import {
  fetchProducts,
  fetchProductsPerPage,
  searchProducts,
} from '../repositories/productRepository';
import { FilterContext } from './FilterContext';
import { errorHandler } from '../errors/errorHandler';
import { buildQuery, extractExistingParams } from '../utils';
import { useSearchParams } from 'react-router-dom';

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState({ products: [] });
  const [query, setQuery] = useState('');
  const [pages, setPages] = useState();
  const [currentPage, setCurrentPage] = useState();
  const [loading, setLoading] = useState(true);
  const { filters, currentCategory } = useContext(FilterContext);
  const [searchParams, setSearchParams] = useSearchParams();

  async function search(options) {
    try {
      setLoading(true);
      const data = await searchProducts({ options, query });
      setProducts(data);
      getTotalPages(data);
      setCurrentPage(1);
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

  async function loadProducts(options) {
    try {
      setLoading(true);
      let query = buildQuery(filters);
      query = query ? query + `&category=${currentCategory}` : `?category=${currentCategory}`;
      const data = await fetchProducts({ query, options });
      setProducts(data);
      getTotalPages(data);
      setCurrentPage(1);
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

  async function pagination(page) {
    if (typeof page === 'number') {
      let query = buildQuery(filters);
      query = query ? query + `&category=${currentCategory}` : `?category=${currentCategory}`;
      const defQuery = query ? `${query}&from=${(page - 1) * 20}` : `?from=${(page - 1) * 20}`;
      const results = await fetchProductsPerPage(defQuery);
      setProducts(results);
      setCurrentPage(page);
    }
  }

  function changeCurrentPage(page) {
    setSearchParams((prev) => ({ ...extractExistingParams(prev), page }));
    setCurrentPage(page);
  }

  useEffect(() => {
    pagination(currentPage);
  }, [searchParams]);

  useEffect(() => {
    const abortController = new AbortController();
    const options = {
      signal: abortController.signal,
    };
    loadProducts(options);

    return () => {
      abortController.abort();
    };
  }, [filters]);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        pages,
        currentPage,
        pagination,
        setQuery,
        changeCurrentPage,
      }}>
      {children}
    </ProductContext.Provider>
  );
}
