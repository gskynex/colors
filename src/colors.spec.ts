import { Colors } from './colors';

describe('Colors', () => {
  test('should return the total number of colors', () => {
    expect(Colors.getTotal()).toBe(0);
  });

  test('should return the list of color tokens', () => {
    expect(Colors.getTokens()).toEqual([]);
  });

  test('should return the list of color types', () => {
    expect(Colors.getTypes()).toEqual(['toHex', 'toRgb', 'toHsl']);
  });

  test('should return color values in RGB format', () => {
    expect(Colors.getValues('toRgb')).toEqual([]);
  });

  test('should return color values in HEX format', () => {
    expect(Colors.getValues('toHex')).toEqual([]);
  });

  test('should return color values in HSL format', () => {
    expect(Colors.getValues('toHsl')).toEqual([]);
  });

  test('should return a Color object by its token', () => {
    expect(() => {Colors.getColor('black');}).toThrow('Invalid token: \'black\' not recognized');
  });
});