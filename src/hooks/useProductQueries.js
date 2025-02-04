import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { createQueryBuilders } from '@/utils/product';

export default function useProductQueries() {
  const [searchParams] = useSearchParams();
  const { categoryName } = useParams();
  const { pathname } = useLocation();

  const currentPath = '/' + pathname.split('/')[1];
  const currentPage = Number(searchParams.get('page')) || 1;
  const keyword = searchParams.get('keyword');

  const queryBuilders = createQueryBuilders(searchParams, currentPage, keyword, categoryName);

  return {
    searchParams,
    currentPath,
    currentPage,
    keyword,
    queryBuilders,
    categoryName,
  };
}
