/**
 * Simple function to practice TDD.
 *
 * The goal is to deliver a function that takes a string entry ("1, 2, 3" for instance)
 * and returns the sum of all numbers. If the string is invalid it should return 0.
 */
import sumOfString from '../sumOfString';

/**
 * First, we want to handle the case where our add function is given an empty string or one with a single element.
 */
describe('sumOfString', function() {
  test('test null, undefined, empty string', function() {
    expect(sumOfString()).toEqual(0);
    expect(sumOfString(null)).toEqual(0);
    expect(sumOfString('')).toEqual(0);
  });

  test('test single element', function() {
    expect(sumOfString('1')).toEqual(1);
  });

  test('test non numeric elements', function() {
    expect(sumOfString('a,bc,')).toEqual(0);
    expect(sumOfString('a,b,?,£,4,5')).toEqual(0);
  });

  test('test mixture of numberic and non numeric elements', function() {
    expect(sumOfString('1,a,2')).toEqual(0);
    expect(sumOfString('1,2,&')).toEqual(0);
    expect(sumOfString('?,4,5,6')).toEqual(0);
  });

  test('test numeric elements', function() {
    expect(sumOfString('1,2,3,4,5')).toEqual(15);
  });

  test('test negative numeric elements', function() {
    expect(sumOfString('1,-2,3,4,5')).toEqual(11);
    expect(sumOfString('-2,-3,1')).toEqual(-4);
  });
});
