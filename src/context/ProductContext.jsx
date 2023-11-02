import { createContext, useContext, useEffect, useState } from 'react';
import { fetchProducts, searchProducts } from '../repositories/productRepository';
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

  function changeCurrentPage(page) {
    if (typeof page !== 'number') return;
    setSearchParams((prev) => ({ ...extractExistingParams(prev), page }));
  }

  useEffect(() => {
    const abortController = new AbortController();
    const options = {
      signal: abortController.signal,
    };
    const currentPage = Number(searchParams.get('page')) || 1;
    setCurrentPage(currentPage);
    loadProducts(currentPage, options);

    return () => {
      abortController.abort();
    };
  }, [filters, searchParams]);

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
