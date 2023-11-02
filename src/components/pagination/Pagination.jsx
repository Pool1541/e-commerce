import { PaginationButton, StyledPaginationContainer } from './Pagination.styled';
import useProducts from '../../hooks/useProducts';
import { buildPagination } from '../../utils';
import { ChevronLeftIcon, ChevronRightIcon } from '../../assets/icons';

export default function Pagination() {
  const { changeCurrentPage, currentPage, pages } = useProducts();
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
