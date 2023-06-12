export function formatCurrency(num) {
  return num.toLocaleString('es-pe', { style: 'currency', currency: 'PEN' });
}
