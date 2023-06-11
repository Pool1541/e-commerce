export function buildQuery(arr) {
  const queryString = arr.reduce((acc, curr) => {
    const values = curr.filterList
      .filter((item) => (item.checked && typeof item.value !== 'number') || item.value > 0)
      .map((item) => item.value);

    if (values.length > 0) {
      acc += `${curr.title}=${values.join(',')}&`;
    }

    return acc;
  }, '');

  return queryString ? `?${queryString}`.slice(0, queryString.length) : '';
}

// export function buildQuery(object) {
//   let query = '';
//   for (let e in object) {
//     if (
//       (object[e] instanceof Array && object[e].length > 0) ||
//       (typeof object[e] === 'number' && object[e] > 0)
//     ) {
//       query += `${[e]}=${JSON.stringify(object[e])}&`;
//     }
//   }
//   return query && `?${query}`.slice(0, query.length);
// }
