import { foundPair, replaceAll } from '../src/util';

describe('Util: replaceAll', () => {
  test('Testing replaceAll function', () => {
    expect(replaceAll('Hello ${name}', 'name', 'Daniel')).toEqual('Hello Daniel');
  });
});


describe('Util: foundPair', () => {
    test('Testing foundPair function', () => {
      expect(foundPair({ "name": "Daniel" }, 'Hello ${name}')).toBeTruthy();
    });

    test('Testing foundPair function, should return false', () => {
        expect(foundPair({ "test": "Daniel" }, 'Hello ${name}')).toBeFalsy();
    });
  });