import { createContext, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchProducts } from '@/repositories/productRepository';
import { useDataFetcher } from '@/hooks';

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [pages, setPages] = useState();
  const [searchParams] = useSearchParams();
  const { categoryName } = useParams();

  const currentPage = Number(searchParams.get('page')) || 1;
  const keyword = searchParams.get('keyword');

  const { data: products, loading } = useDataFetcher({
    fetcherFn: fetchProducts,
    args: { query: buildQueryString() },
    dependencies: [searchParams],
    select: (data) => (getTotalPages(data), data),
  });

  function buildQueryString() {
    const limit = (currentPage - 1) * 20;
    searchParams.delete('page');
    !keyword && searchParams.set('category', categoryName);
    searchParams.set('from', limit);

    return '?' + decodeURIComponent(searchParams.toString());
  }

  function getTotalPages(products) {
    const totalProducts = products.count;
    const totalPages = Math.ceil(totalProducts / 20);
    setPages(totalPages);
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        pages,
      }}>
      {children}
    </ProductContext.Provider>
  );
}
