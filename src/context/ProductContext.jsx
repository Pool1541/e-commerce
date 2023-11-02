import { createContext, useEffect, useState } from 'react';
import { fetchProducts, searchProducts } from '../repositories/productRepository';
import { errorHandler } from '../errors/errorHandler';
import { usePagination } from '../hooks/usePagination';
import { useParams, useSearchParams } from 'react-router-dom';

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState({ products: [] });
  const [query, setQuery] = useState('');
  const [pages, setPages] = useState();
  const [currentPage, changeCurrentPage] = usePagination();
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

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

  async function loadProducts(options) {
    try {
      setLoading(true);
      const currentPage = searchParams.get('page') || 1;
      const limit = (currentPage - 1) * 20;
      searchParams.delete('page');
      searchParams.set('category', categoryName);
      searchParams.set('from', limit);

      const query = '?' + decodeURIComponent(searchParams.toString());
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

    loadProducts(options);

    return () => {
      abortController.abort();
    };
  }, [searchParams]);

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
