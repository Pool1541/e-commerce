import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { createQueryBuilders } from '@/utils/filter';

export default function useFilterQueries() {
  const [ searchParams ] = useSearchParams();
  const { categoryName: currentCategory } = useParams();
  const { pathname } = useLocation();

  const currentPath = '/' + pathname.split('/')[1];
  const keyword = searchParams.get('keyword');

  const queryBuilders = createQueryBuilders(searchParams, keyword, currentCategory);

  return {
    searchParams,
    currentPath,
    keyword,
    queryBuilders,
    currentCategory,
  }
}