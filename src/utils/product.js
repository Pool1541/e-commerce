import { PUBLIC_ROUTES } from '@/config';

export const ITEMS_PER_PAGE = 20;
export const MIN_DISCOUNT = 40;

export const calculateOffset = (page) => (page - 1) * ITEMS_PER_PAGE;

export const calculateTotalPages = (totalProducts) => Math.ceil(totalProducts / ITEMS_PER_PAGE);

export const buildSearchParams = (params, searchParams) => {
  const cleanParams = new URLSearchParams(searchParams);
  cleanParams.delete('page');

  Object.entries(params).forEach(([key, value]) => {
    if (value !== null) cleanParams.set(key, value);
  });

  return '?' + decodeURIComponent(cleanParams.toString());
};

export const createQueryBuilders = (searchParams, currentPage, keyword, categoryName) => ({
  [PUBLIC_ROUTES.CATEGORY]: (() =>
    buildSearchParams(
      {
        category: !keyword ? categoryName : null,
        from: calculateOffset(currentPage),
      },
      searchParams
    ))(),

  [PUBLIC_ROUTES.OFFERS]: (() =>
    buildSearchParams(
      {
        minDiscount: MIN_DISCOUNT,
        from: calculateOffset(currentPage),
      },
      searchParams
    ))(),
});
