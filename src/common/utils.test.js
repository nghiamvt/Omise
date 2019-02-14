import { isPlainObject, formatter } from './utils';

describe('Utils', () => {
  describe('isPlainObject', () => {
    it('true when created by the Object constructor.', () => {
      expect(isPlainObject({})).toBeTruthy();
      expect(isPlainObject({ foo: 'bar' })).toBeTruthy();
      expect(isPlainObject(Object.create({}))).toBeTruthy();
      expect(isPlainObject(Object.create(Object.prototype))).toBeTruthy();
    });
    it('false when not created by the Object constructor.', () => {
      expect(isPlainObject([])).toBeFalsy();
      expect(isPlainObject(1)).toBeFalsy();
      expect(isPlainObject(['foo', 'bar'])).toBeFalsy();
      expect(isPlainObject(null)).toBeFalsy();
    });
  });
  it('formatNumber', () => {
    expect(formatter.format(1000)).toEqual('$1,000.00');
    expect(formatter.format(10)).toEqual('$10.00');
    expect(formatter.format(123233000)).toEqual('$123,233,000.00');
  });
});
