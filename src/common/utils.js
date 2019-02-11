export function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

export function formatNumber(x) {
  // return x.toLocaleString();
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
