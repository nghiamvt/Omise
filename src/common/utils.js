export function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});
