export function formatCurrency(num) {
  if (typeof num !== 'number') return null;
  return num.toLocaleString('es-pe', { style: 'currency', currency: 'PEN' });
}
