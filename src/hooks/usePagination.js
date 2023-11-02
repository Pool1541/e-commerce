import { useSearchParams } from 'react-router-dom';
import { extractExistingParams } from '../utils';
import { useEffect, useState } from 'react';

export function usePagination() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(() => Number(searchParams.get('page')) || 1);

  function changeCurrentPage(page) {
    if (typeof page !== 'number') return;
    setSearchParams((prev) => ({ ...extractExistingParams(prev), page }));
  }

  useEffect(() => {
    const currentPage = Number(searchParams.get('page')) || 1;
    setCurrentPage(currentPage);
  }, [searchParams]);

  return [currentPage, changeCurrentPage];
}
