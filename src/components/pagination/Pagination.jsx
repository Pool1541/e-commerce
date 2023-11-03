import { PaginationButton, StyledPaginationContainer } from './Pagination.styled';
import { buildPagination } from '../../utils';
import { ChevronLeftIcon, ChevronRightIcon } from '../../assets/icons';
import { usePagination } from '../../hooks/usePagination';
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

export default function Pagination() {
  const { pages } = useContext(ProductContext);
  const [currentPage, changeCurrentPage] = usePagination();
  const arrFromPagination = Array.from({ length: pages }, (_, index) => index + 1);
  const pagesToRender = buildPagination(arrFromPagination, currentPage);

  return (
    <StyledPaginationContainer>
      <ul>
        <li>
          <PaginationButton
            onClick={() => {
              changeCurrentPage(currentPage <= 1 ? 1 : currentPage - 1);
            }}
            disabled={currentPage === 1 ? true : false}>
            <ChevronLeftIcon />
          </PaginationButton>
        </li>
        {pagesToRender.map((e, index) => (
          <li key={index}>
            <PaginationButton
              current={currentPage === e}
              onClick={() => {
                changeCurrentPage(e);
              }}>
              {e}
            </PaginationButton>
          </li>
        ))}
        <li>
          <PaginationButton
            onClick={() => {
              changeCurrentPage(currentPage >= pages ? currentPage : currentPage + 1);
            }}
            disabled={currentPage == pages}>
            <ChevronRightIcon />
          </PaginationButton>
        </li>
      </ul>
    </StyledPaginationContainer>
  );
}
