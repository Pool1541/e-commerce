import { createContext, useContext, useEffect, useState } from 'react';
import { fetchProducts, fetchProductsPerPage } from '../repositories/productRepository';
import { FilterContext } from './FilterContext';
import { errorHandler } from '../errors/errorHandler';
import { buildQuery } from '../utils';

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState({ products: [] });
  const [pages, setPages] = useState();
  const [currentPage, setCurrentPage] = useState();
  const [loading, setLoading] = useState(true);
  const { filters } = useContext(FilterContext);

  async function loadProducts(abortController) {
    try {
      const query = buildQuery(filters);
      const data = await fetchProducts(query, abortController);
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
    const query = buildQuery(filters);
    const defQuery = query ? `${query}&from=${(page - 1) * 20}` : `?from=${(page - 1) * 20}`;
    const results = await fetchProductsPerPage(defQuery);
    setProducts(results);
    setCurrentPage(page);
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
        pages,
        currentPage,
        pagination,
      }}>
      {children}
    </ProductContext.Provider>
  );
}
