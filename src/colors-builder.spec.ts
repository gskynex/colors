import { Colors } from './colors';
import { ColorsBuilder } from './colors-builder';

describe('Colors and ColorsBuilder', () => {
  let colorsBuilder: ColorsBuilder;

  beforeAll(() => {
    colorsBuilder = new ColorsBuilder()
      .addColor(0, 0, 0, 'black')
      .addColor(255, 255, 255, 'white')
      .addSkipException()
      .create();
  });

  afterAll(() => {
    colorsBuilder.destroy();
  });

  test('should return the total number of colors', () => {
    expect(Colors.getTotal()).toBe(2);
  });

  test('should return the list of color tokens', () => {
    expect(Colors.getTokens()).toEqual(['black', 'white']);
  });

  test('should return a Color object by its token', () => {
    expect(Colors.getColor('black').token).toBe('black');
  });

  test('should return color values in HEX format', () => {
    expect(Colors.getValues('toHex')).toEqual(['#000000', '#ffffff']);
  });

  test('should return color values in RGB format', () => {
    expect(Colors.getValues('toRgb')).toEqual(['rgb(0, 0, 0)', 'rgb(255, 255, 255)']);
  });
});