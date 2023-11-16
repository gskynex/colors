import { Color } from './color';

describe('Color', () => {
  test('should return RGB array', () => {
    const black = new Color(0, 0, 0, 'black');

    expect(black.toArray()).toEqual([0, 0, 0]);
  });

  test('should correctly transform color to HEX string', () => {
    const black = new Color(0, 0, 0, 'black');

    expect(black.toHex()).toEqual('#000000');
  });

  test('should correctly transform color to RGB string', () => {
    const black = new Color(0, 0, 0, 'black');

    expect(black.toRgb()).toEqual('rgb(0, 0, 0)');
  });

  test('should correctly transform color to RGBA string', () => {
    const black = new Color(0, 0, 0, 'black');

    expect(black.toRgba(0.5)).toEqual('rgba(0, 0, 0, 0.5)');
  });

  test('should correctly transform color to HSL string', () => {
    const black = new Color(60, 51, 53, 'black');

    expect(black.toHsl()).toEqual('hsl(347deg, 8%, 22%)');
  });

  test('should throw an exception for invalid alpha value', () => {
    const black = new Color(0, 0, 0, 'black');

    expect(() => {
      black.toRgba(2);
    }).toThrow('Validation error: Alpha should be within the range of 0 to 1');
  });

  test('should throw an exception for empty token', () => {
    expect(() => {
      new Color(0, 0, 0, '');
    }).toThrow('Validation error: Token must not be empty or consist only of whitespace.');
  });

  test('should throw an exception for token with only whitespace', () => {
    expect(() => {
      new Color(0, 0, 0, '   ');
    }).toThrow('Validation error: Token must not be empty or consist only of whitespace.');
  });

  test('should throw an exception for invalid red value', () => {
    expect(() => {
      new Color(-1, 0, 0, 'red');
    }).toThrow('Validation error: Values should be within the range of 0 to 255.');
  });

  test('should throw an exception for invalid green value', () => {
    expect(() => {
      new Color(0, 256, 0, 'green');
    }).toThrow('Validation error: Values should be within the range of 0 to 255.');
  });

  test('should throw an exception for invalid blue value', () => {
    expect(() => {
      new Color(0, 0, -1, 'blue');
    }).toThrow('Validation error: Values should be within the range of 0 to 255.');
  });

  test('should assign values and token', () => {
    const color = new Color(0, 0, 0, ' black ');

    expect(color.r).toBe(0);
    expect(color.g).toBe(0);
    expect(color.b).toBe(0);
    expect(color.token).toBe('black');
  });
});