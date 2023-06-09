export function buildQuery(object) {
  let query = '';
  for (let e in object) {
    if (
      (object[e] instanceof Array && object[e].length > 0) ||
      (typeof object[e] === 'number' && object[e] > 0)
    ) {
      query += `${[e]}=${JSON.stringify(object[e])}&`;
    }
  }
  return query && `?${query}`.slice(0, query.length);
}
