export function transformCard(cardValues) {
  const values = { ...cardValues };
  const [month, year] = values.expirationDate.split('/');
  values.expirationDate = `20${year}-${month}-01`;
  values.securityCode = values.securityCode.toString();

  return values;
}
