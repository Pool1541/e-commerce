import { FILTERS, MIN_DISCOUNT, PUBLIC_ROUTES } from '@/config';

export const buildSearchParams = (params, searchParams) => {
  const cleanParams = new URLSearchParams(searchParams);
  cleanParams.delete('page');

  Object.entries(params).forEach(([key, value]) => {
    if (value !== null) cleanParams.set(key, value);
  });

  cleanParams.append('filters', FILTERS.join(','));

  return '?' + cleanParams.toString();
};

export const createQueryBuilders = (searchParams, keyword, categoryName) => ({
  [PUBLIC_ROUTES.CATEGORY]: () =>
    buildSearchParams(
      {
        category: categoryName,
      },
      searchParams
    ),
  [PUBLIC_ROUTES.OFFERS]: () =>
    buildSearchParams(
      {
        minDiscount: MIN_DISCOUNT,
      },
      searchParams
    ),
  [PUBLIC_ROUTES.SEARCH]: () =>
    buildSearchParams(
      {
        keyword: keyword,
      },
      searchParams
    ),
});
