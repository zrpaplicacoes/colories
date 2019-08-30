import { getColorComponents } from '../../src/core/converters';

describe('converters', () => {
  test('getColorComponents', () => {
    expect(getColorComponents('rgb(0, 0, 0)')).toEqual([0, 0, 0]);
    expect(getColorComponents('rgb(255, 255, 255)')).toEqual([255, 255, 255]);
    expect(getColorComponents('rgb(20, 255, 0)')).toEqual([20, 255, 0]);
  });
});
