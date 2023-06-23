import { PaginationButton, StyledPaginationContainer } from './Pagination.styled';
import useProducts from '../../hooks/useProducts';
import { buildPagination } from '../../utils';

export default function Pagination() {
  const { pagination, currentPage, pages } = useProducts();
  const arrFromPagination = Array.from({ length: pages }, (_, index) => index + 1);
  const pagesToRender = buildPagination(arrFromPagination, currentPage);

  return (
    <StyledPaginationContainer>
      <ul>
        <li>
          <PaginationButton
            onClick={() => {
              pagination(currentPage <= 1 ? 1 : currentPage - 1);
            }}
            disabled={currentPage === 1 ? true : false}>
            Atrás
          </PaginationButton>
        </li>
        {pagesToRender.map((e, index) => (
          <li key={index}>
            <PaginationButton
              current={currentPage === e}
              onClick={() => {
                pagination(e);
              }}>
              {e}
            </PaginationButton>
          </li>
        ))}
        <li>
          <PaginationButton
            onClick={() => {
              pagination(currentPage >= pages ? currentPage : currentPage + 1);
            }}
            disabled={currentPage == pages}>
            Siguiente
          </PaginationButton>
        </li>
      </ul>
    </StyledPaginationContainer>
  );
}
