export function buildPagination(arrOfPages = [], current = 1) {
  let pagination = [];

  if (current - 2 <= arrOfPages[0] + 1) {
    for (let index = 1; index < current; index++) {
      pagination.push(index);
    }
  } else {
    pagination.push(arrOfPages[0], '...', arrOfPages[current - 3], arrOfPages[current - 2]);
  }

  if (current + 2 >= arrOfPages.at(-1) - 1) {
    for (let index = current; index <= arrOfPages.at(-1); index++) {
      pagination.push(index);
    }
  } else {
    pagination.push(current, current + 1, current + 2, '...', arrOfPages.at(-1));
  }

  return pagination;
}
