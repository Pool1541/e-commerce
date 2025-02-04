import { useState } from 'react';
import ProductContext from './ProductContext';
import { useDataFetcher, useProductQueries } from '@/hooks';
import { fetchProducts } from '@/repositories/productRepository';
import { calculateTotalPages } from '@/utils/product';

export default function ProductContextProvider({ children }) {
  const { searchParams, currentPath, queryBuilders, categoryName } = useProductQueries();
  const [pages, setPages] = useState(1);

  const { data: products, loading } = useDataFetcher({
    fetcherFn: fetchProducts,
    args: { query: queryBuilders[currentPath] },
    dependencies: [searchParams, categoryName],
    select: (data) => {
      setPages(calculateTotalPages(data.count));
      return data;
    },
  });

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
