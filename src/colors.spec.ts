import { Colors } from './colors';

describe('Colors', () => {
  test('total number of colors', () => {
    expect(Colors.getTotal()).toBe(0);
  });

  test('list of tokens', () => {
    expect(Colors.getTokens()).toEqual([]);
  });

  test('list of types', () => {
    expect(Colors.getTypes()).toEqual(['toHex', 'toRgb', 'toHsl']);
  });

  test('values in RGB format', () => {
    expect(Colors.getValues('toRgb')).toEqual([]);
  });

  test('values in HEX format', () => {
    expect(Colors.getValues('toHex')).toEqual([]);
  });

  test('values in HSL format', () => {
    expect(Colors.getValues('toHsl')).toEqual([]);
  });

  test('throws error for unrecognized token', () => {
    expect(() => {Colors.getColor('black');}).toThrow('Invalid token: \'black\' not recognized');
  });

  test('total number of default colors', () => {
    expect(Colors.useDefault().getTotal()).toBe(141);
  });

  test('default token AliceBlue in HEX format', () => {
    expect(Colors.useDefault().getColor('AliceBlue').toHex()).toBe('#f0f8ff');
  });

  test('default token AntiqueWhite in HEX format', () => {
    expect(Colors.useDefault().getColor('AntiqueWhite').toHex()).toBe('#faebd7');
  });

  test('default token Aqua in HEX format', () => {
    expect(Colors.useDefault().getColor('Aqua').toHex()).toBe('#00ffff');
  });

  test('default token Aquamarine in HEX format', () => {
    expect(Colors.useDefault().getColor('Aquamarine').toHex()).toBe('#7fffd4');
  });

  test('default token Azure in HEX format', () => {
    expect(Colors.useDefault().getColor('Azure').toHex()).toBe('#f0ffff');
  });

  test('default token Beige in HEX format', () => {
    expect(Colors.useDefault().getColor('Beige').toHex()).toBe('#f5f5dc');
  });

  test('default token Bisque in HEX format', () => {
    expect(Colors.useDefault().getColor('Bisque').toHex()).toBe('#ffe4c4');
  });

  test('default token Black in HEX format', () => {
    expect(Colors.useDefault().getColor('Black').toHex()).toBe('#000000');
  });

  test('default token BlanchedAlmond in HEX format', () => {
    expect(Colors.useDefault().getColor('BlanchedAlmond').toHex()).toBe('#ffebcd');
  });

  test('default token Blue in HEX format', () => {
    expect(Colors.useDefault().getColor('Blue').toHex()).toBe('#0000ff');
  });

  test('default token BlueViolet in HEX format', () => {
    expect(Colors.useDefault().getColor('BlueViolet').toHex()).toBe('#8a2be2');
  });

  test('default token Brown in HEX format', () => {
    expect(Colors.useDefault().getColor('Brown').toHex()).toBe('#a52a2a');
  });

  test('default token BurlyWood in HEX format', () => {
    expect(Colors.useDefault().getColor('BurlyWood').toHex()).toBe('#deb887');
  });

  test('default token CadetBlue in HEX format', () => {
    expect(Colors.useDefault().getColor('CadetBlue').toHex()).toBe('#5f9ea0');
  });

  test('default token Chartreuse in HEX format', () => {
    expect(Colors.useDefault().getColor('Chartreuse').toHex()).toBe('#7fff00');
  });

  test('default token Chocolate in HEX format', () => {
    expect(Colors.useDefault().getColor('Chocolate').toHex()).toBe('#d2691e');
  });

  test('default token Coral in HEX format', () => {
    expect(Colors.useDefault().getColor('Coral').toHex()).toBe('#ff7f50');
  });

  test('default token CornflowerBlue in HEX format', () => {
    expect(Colors.useDefault().getColor('CornflowerBlue').toHex()).toBe('#6495ed');
  });

  test('default token Cornsilk in HEX format', () => {
    expect(Colors.useDefault().getColor('Cornsilk').toHex()).toBe('#fff8dc');
  });

  test('default token Crimson in HEX format', () => {
    expect(Colors.useDefault().getColor('Crimson').toHex()).toBe('#dc143c');
  });

  test('default token Cyan in HEX format', () => {
    expect(Colors.useDefault().getColor('Cyan').toHex()).toBe('#00ffff');
  });

  test('default token DarkBlue in HEX format', () => {
    expect(Colors.useDefault().getColor('DarkBlue').toHex()).toBe('#00008b');
  });

  test('default token DarkCyan in HEX format', () => {
    expect(Colors.useDefault().getColor('DarkCyan').toHex()).toBe('#008b8b');
  });

  test('default token DarkGoldenRod in HEX format', () => {
    expect(Colors.useDefault().getColor('DarkGoldenRod').toHex()).toBe('#b8860b');
  });

  test('default token DarkGray in HEX format', () => {
    expect(Colors.useDefault().getColor('DarkGray').toHex()).toBe('#a9a9a9');
  });

  test('default token DarkGreen in HEX format', () => {
    expect(Colors.useDefault().getColor('DarkGreen').toHex()).toBe('#006400');
  });

  test('default token DarkKhaki in HEX format', () => {
    expect(Colors.useDefault().getColor('DarkKhaki').toHex()).toBe('#bdb76b');
  });

  test('default token DarkMagenta in HEX format', () => {
    expect(Colors.useDefault().getColor('DarkMagenta').toHex()).toBe('#8b008b');
  });

  test('default token DarkOliveGreen in HEX format', () => {
    expect(Colors.useDefault().getColor('DarkOliveGreen').toHex()).toBe('#556b2f');
  });

  test('default token DarkOrange in HEX format', () => {
    expect(Colors.useDefault().getColor('DarkOrange').toHex()).toBe('#ff8c00');
  });

  test('default token DarkOrchid in HEX format', () => {
    expect(Colors.useDefault().getColor('DarkOrchid').toHex()).toBe('#9932cc');
  });

  test('default token DarkRed in HEX format', () => {
    expect(Colors.useDefault().getColor('DarkRed').toHex()).toBe('#8b0000');
  });

  test('default token DarkSalmon in HEX format', () => {
    expect(Colors.useDefault().getColor('DarkSalmon').toHex()).toBe('#e9967a');
  });

  test('default token DarkSeaGreen in HEX format', () => {
    expect(Colors.useDefault().getColor('DarkSeaGreen').toHex()).toBe('#8fbc8f');
  });

  test('default token DarkSlateBlue in HEX format', () => {
    expect(Colors.useDefault().getColor('DarkSlateBlue').toHex()).toBe('#483d8b');
  });

  test('default token DarkSlateGray in HEX format', () => {
    expect(Colors.useDefault().getColor('DarkSlateGray').toHex()).toBe('#2f4f4f');
  });

  test('default token DarkTurquoise in HEX format', () => {
    expect(Colors.useDefault().getColor('DarkTurquoise').toHex()).toBe('#00ced1');
  });

  test('default token DarkViolet in HEX format', () => {
    expect(Colors.useDefault().getColor('DarkViolet').toHex()).toBe('#9400d3');
  });

  test('default token DeepPink in HEX format', () => {
    expect(Colors.useDefault().getColor('DeepPink').toHex()).toBe('#ff1493');
  });

  test('default token DeepSkyBlue in HEX format', () => {
    expect(Colors.useDefault().getColor('DeepSkyBlue').toHex()).toBe('#00bfff');
  });

  test('default token DimGray in HEX format', () => {
    expect(Colors.useDefault().getColor('DimGray').toHex()).toBe('#696969');
  });

  test('default token DodgerBlue in HEX format', () => {
    expect(Colors.useDefault().getColor('DodgerBlue').toHex()).toBe('#1e90ff');
  });

  test('default token FireBrick in HEX format', () => {
    expect(Colors.useDefault().getColor('FireBrick').toHex()).toBe('#b22222');
  });

  test('default token FloralWhite in HEX format', () => {
    expect(Colors.useDefault().getColor('FloralWhite').toHex()).toBe('#fffaf0');
  });

  test('default token ForestGreen in HEX format', () => {
    expect(Colors.useDefault().getColor('ForestGreen').toHex()).toBe('#228b22');
  });

  test('default token Fuchsia in HEX format', () => {
    expect(Colors.useDefault().getColor('Fuchsia').toHex()).toBe('#ff00ff');
  });

  test('default token Gainsboro in HEX format', () => {
    expect(Colors.useDefault().getColor('Gainsboro').toHex()).toBe('#dcdcdc');
  });

  test('default token GhostWhite in HEX format', () => {
    expect(Colors.useDefault().getColor('GhostWhite').toHex()).toBe('#f8f8ff');
  });

  test('default token Gold in HEX format', () => {
    expect(Colors.useDefault().getColor('Gold').toHex()).toBe('#ffd700');
  });

  test('default token GoldenRod in HEX format', () => {
    expect(Colors.useDefault().getColor('GoldenRod').toHex()).toBe('#daa520');
  });

  test('default token Gray in HEX format', () => {
    expect(Colors.useDefault().getColor('Gray').toHex()).toBe('#808080');
  });

  test('default token Green in HEX format', () => {
    expect(Colors.useDefault().getColor('Green').toHex()).toBe('#008000');
  });

  test('default token GreenYellow in HEX format', () => {
    expect(Colors.useDefault().getColor('GreenYellow').toHex()).toBe('#adff2f');
  });

  test('default token HoneyDew in HEX format', () => {
    expect(Colors.useDefault().getColor('HoneyDew').toHex()).toBe('#f0fff0');
  });

  test('default token HotPink in HEX format', () => {
    expect(Colors.useDefault().getColor('HotPink').toHex()).toBe('#ff69b4');
  });

  test('default token IndianRed in HEX format', () => {
    expect(Colors.useDefault().getColor('IndianRed').toHex()).toBe('#cd5c5c');
  });

  test('default token Indigo in HEX format', () => {
    expect(Colors.useDefault().getColor('Indigo').toHex()).toBe('#4b0082');
  });

  test('default token Ivory in HEX format', () => {
    expect(Colors.useDefault().getColor('Ivory').toHex()).toBe('#fffff0');
  });

  test('default token Khaki in HEX format', () => {
    expect(Colors.useDefault().getColor('Khaki').toHex()).toBe('#f0e68c');
  });

  test('default token Lavender in HEX format', () => {
    expect(Colors.useDefault().getColor('Lavender').toHex()).toBe('#e6e6fa');
  });

  test('default token LavenderBlush in HEX format', () => {
    expect(Colors.useDefault().getColor('LavenderBlush').toHex()).toBe('#fff0f5');
  });

  test('default token LawnGreen in HEX format', () => {
    expect(Colors.useDefault().getColor('LawnGreen').toHex()).toBe('#7cfc00');
  });

  test('default token LemonChiffon in HEX format', () => {
    expect(Colors.useDefault().getColor('LemonChiffon').toHex()).toBe('#fffacd');
  });

  test('default token LightBlue in HEX format', () => {
    expect(Colors.useDefault().getColor('LightBlue').toHex()).toBe('#add8e6');
  });

  test('default token LightCoral in HEX format', () => {
    expect(Colors.useDefault().getColor('LightCoral').toHex()).toBe('#f08080');
  });

  test('default token LightCyan in HEX format', () => {
    expect(Colors.useDefault().getColor('LightCyan').toHex()).toBe('#e0ffff');
  });

  test('default token LightGoldenRodYellow in HEX format', () => {
    expect(Colors.useDefault().getColor('LightGoldenRodYellow').toHex()).toBe('#fafad2');
  });

  test('default token LightGray in HEX format', () => {
    expect(Colors.useDefault().getColor('LightGray').toHex()).toBe('#d3d3d3');
  });

  test('default token LightGreen in HEX format', () => {
    expect(Colors.useDefault().getColor('LightGreen').toHex()).toBe('#90ee90');
  });

  test('default token LightPink in HEX format', () => {
    expect(Colors.useDefault().getColor('LightPink').toHex()).toBe('#ffb6c1');
  });

  test('default token LightSalmon in HEX format', () => {
    expect(Colors.useDefault().getColor('LightSalmon').toHex()).toBe('#ffa07a');
  });

  test('default token LightSeaGreen in HEX format', () => {
    expect(Colors.useDefault().getColor('LightSeaGreen').toHex()).toBe('#20b2aa');
  });

  test('default token LightSkyBlue in HEX format', () => {
    expect(Colors.useDefault().getColor('LightSkyBlue').toHex()).toBe('#87cefa');
  });

  test('default token LightSlateGray in HEX format', () => {
    expect(Colors.useDefault().getColor('LightSlateGray').toHex()).toBe('#778899');
  });

  test('default token LightSteelBlue in HEX format', () => {
    expect(Colors.useDefault().getColor('LightSteelBlue').toHex()).toBe('#b0c4de');
  });

  test('default token LightYellow in HEX format', () => {
    expect(Colors.useDefault().getColor('LightYellow').toHex()).toBe('#ffffe0');
  });

  test('default token Lime in HEX format', () => {
    expect(Colors.useDefault().getColor('Lime').toHex()).toBe('#00ff00');
  });

  test('default token LimeGreen in HEX format', () => {
    expect(Colors.useDefault().getColor('LimeGreen').toHex()).toBe('#32cd32');
  });

  test('default token Linen in HEX format', () => {
    expect(Colors.useDefault().getColor('Linen').toHex()).toBe('#faf0e6');
  });

  test('default token Magenta in HEX format', () => {
    expect(Colors.useDefault().getColor('Magenta').toHex()).toBe('#ff00ff');
  });

  test('default token Maroon in HEX format', () => {
    expect(Colors.useDefault().getColor('Maroon').toHex()).toBe('#800000');
  });

  test('default token MediumAquaMarine in HEX format', () => {
    expect(Colors.useDefault().getColor('MediumAquaMarine').toHex()).toBe('#66cdaa');
  });

  test('default token MediumBlue in HEX format', () => {
    expect(Colors.useDefault().getColor('MediumBlue').toHex()).toBe('#0000cd');
  });

  test('default token MediumOrchid in HEX format', () => {
    expect(Colors.useDefault().getColor('MediumOrchid').toHex()).toBe('#ba55d3');
  });

  test('default token MediumPurple in HEX format', () => {
    expect(Colors.useDefault().getColor('MediumPurple').toHex()).toBe('#9370db');
  });

  test('default token MediumSeaGreen in HEX format', () => {
    expect(Colors.useDefault().getColor('MediumSeaGreen').toHex()).toBe('#3cb371');
  });

  test('default token MediumSlateBlue in HEX format', () => {
    expect(Colors.useDefault().getColor('MediumSlateBlue').toHex()).toBe('#7b68ee');
  });

  test('default token MediumSpringGreen in HEX format', () => {
    expect(Colors.useDefault().getColor('MediumSpringGreen').toHex()).toBe('#00fa9a');
  });

  test('default token MediumTurquoise in HEX format', () => {
    expect(Colors.useDefault().getColor('MediumTurquoise').toHex()).toBe('#48d1cc');
  });

  test('default token MediumVioletRed in HEX format', () => {
    expect(Colors.useDefault().getColor('MediumVioletRed').toHex()).toBe('#c71585');
  });

  test('default token MidnightBlue in HEX format', () => {
    expect(Colors.useDefault().getColor('MidnightBlue').toHex()).toBe('#191970');
  });

  test('default token MintCream in HEX format', () => {
    expect(Colors.useDefault().getColor('MintCream').toHex()).toBe('#f5fffa');
  });

  test('default token MistyRose in HEX format', () => {
    expect(Colors.useDefault().getColor('MistyRose').toHex()).toBe('#ffe4e1');
  });

  test('default token Moccasin in HEX format', () => {
    expect(Colors.useDefault().getColor('Moccasin').toHex()).toBe('#ffe4b5');
  });

  test('default token NavajoWhite in HEX format', () => {
    expect(Colors.useDefault().getColor('NavajoWhite').toHex()).toBe('#ffdead');
  });

  test('default token Navy in HEX format', () => {
    expect(Colors.useDefault().getColor('Navy').toHex()).toBe('#000080');
  });

  test('default token OldLace in HEX format', () => {
    expect(Colors.useDefault().getColor('OldLace').toHex()).toBe('#fdf5e6');
  });

  test('default token Olive in HEX format', () => {
    expect(Colors.useDefault().getColor('Olive').toHex()).toBe('#808000');
  });

  test('default token OliveDrab in HEX format', () => {
    expect(Colors.useDefault().getColor('OliveDrab').toHex()).toBe('#6b8e23');
  });

  test('default token Orange in HEX format', () => {
    expect(Colors.useDefault().getColor('Orange').toHex()).toBe('#ffa500');
  });

  test('default token OrangeRed in HEX format', () => {
    expect(Colors.useDefault().getColor('OrangeRed').toHex()).toBe('#ff4500');
  });

  test('default token Orchid in HEX format', () => {
    expect(Colors.useDefault().getColor('Orchid').toHex()).toBe('#da70d6');
  });

  test('default token PaleGoldenRod in HEX format', () => {
    expect(Colors.useDefault().getColor('PaleGoldenRod').toHex()).toBe('#eee8aa');
  });

  test('default token PaleGreen in HEX format', () => {
    expect(Colors.useDefault().getColor('PaleGreen').toHex()).toBe('#98fb98');
  });

  test('default token PaleTurquoise in HEX format', () => {
    expect(Colors.useDefault().getColor('PaleTurquoise').toHex()).toBe('#afeeee');
  });

  test('default token PaleVioletRed in HEX format', () => {
    expect(Colors.useDefault().getColor('PaleVioletRed').toHex()).toBe('#db7093');
  });

  test('default token PapayaWhip in HEX format', () => {
    expect(Colors.useDefault().getColor('PapayaWhip').toHex()).toBe('#ffefd5');
  });

  test('default token PeachPuff in HEX format', () => {
    expect(Colors.useDefault().getColor('PeachPuff').toHex()).toBe('#ffdab9');
  });

  test('default token Peru in HEX format', () => {
    expect(Colors.useDefault().getColor('Peru').toHex()).toBe('#cd853f');
  });

  test('default token Pink in HEX format', () => {
    expect(Colors.useDefault().getColor('Pink').toHex()).toBe('#ffc0cb');
  });

  test('default token Plum in HEX format', () => {
    expect(Colors.useDefault().getColor('Plum').toHex()).toBe('#dda0dd');
  });

  test('default token PowderBlue in HEX format', () => {
    expect(Colors.useDefault().getColor('PowderBlue').toHex()).toBe('#b0e0e6');
  });

  test('default token Purple in HEX format', () => {
    expect(Colors.useDefault().getColor('Purple').toHex()).toBe('#800080');
  });

  test('default token RebeccaPurple in HEX format', () => {
    expect(Colors.useDefault().getColor('RebeccaPurple').toHex()).toBe('#663399');
  });

  test('default token Red in HEX format', () => {
    expect(Colors.useDefault().getColor('Red').toHex()).toBe('#ff0000');
  });

  test('default token RosyBrown in HEX format', () => {
    expect(Colors.useDefault().getColor('RosyBrown').toHex()).toBe('#bc8f8f');
  });

  test('default token RoyalBlue in HEX format', () => {
    expect(Colors.useDefault().getColor('RoyalBlue').toHex()).toBe('#4169e1');
  });

  test('default token SaddleBrown in HEX format', () => {
    expect(Colors.useDefault().getColor('SaddleBrown').toHex()).toBe('#8b4513');
  });

  test('default token Salmon in HEX format', () => {
    expect(Colors.useDefault().getColor('Salmon').toHex()).toBe('#fa8072');
  });

  test('default token SandyBrown in HEX format', () => {
    expect(Colors.useDefault().getColor('SandyBrown').toHex()).toBe('#f4a460');
  });

  test('default token SeaGreen in HEX format', () => {
    expect(Colors.useDefault().getColor('SeaGreen').toHex()).toBe('#2e8b57');
  });

  test('default token SeaShell in HEX format', () => {
    expect(Colors.useDefault().getColor('SeaShell').toHex()).toBe('#fff5ee');
  });

  test('default token Sienna in HEX format', () => {
    expect(Colors.useDefault().getColor('Sienna').toHex()).toBe('#a0522d');
  });

  test('default token Silver in HEX format', () => {
    expect(Colors.useDefault().getColor('Silver').toHex()).toBe('#c0c0c0');
  });

  test('default token SkyBlue in HEX format', () => {
    expect(Colors.useDefault().getColor('SkyBlue').toHex()).toBe('#87ceeb');
  });

  test('default token SlateBlue in HEX format', () => {
    expect(Colors.useDefault().getColor('SlateBlue').toHex()).toBe('#6a5acd');
  });

  test('default token SlateGray in HEX format', () => {
    expect(Colors.useDefault().getColor('SlateGray').toHex()).toBe('#708090');
  });

  test('default token Snow in HEX format', () => {
    expect(Colors.useDefault().getColor('Snow').toHex()).toBe('#fffafa');
  });

  test('default token SpringGreen in HEX format', () => {
    expect(Colors.useDefault().getColor('SpringGreen').toHex()).toBe('#00ff7f');
  });

  test('default token SteelBlue in HEX format', () => {
    expect(Colors.useDefault().getColor('SteelBlue').toHex()).toBe('#4682b4');
  });

  test('default token Tan in HEX format', () => {
    expect(Colors.useDefault().getColor('Tan').toHex()).toBe('#d2b48c');
  });

  test('default token Teal in HEX format', () => {
    expect(Colors.useDefault().getColor('Teal').toHex()).toBe('#008080');
  });

  test('default token Thistle in HEX format', () => {
    expect(Colors.useDefault().getColor('Thistle').toHex()).toBe('#d8bfd8');
  });

  test('default token Tomato in HEX format', () => {
    expect(Colors.useDefault().getColor('Tomato').toHex()).toBe('#ff6347');
  });

  test('default token Turquoise in HEX format', () => {
    expect(Colors.useDefault().getColor('Turquoise').toHex()).toBe('#40e0d0');
  });

  test('default token Violet in HEX format', () => {
    expect(Colors.useDefault().getColor('Violet').toHex()).toBe('#ee82ee');
  });

  test('default token Wheat in HEX format', () => {
    expect(Colors.useDefault().getColor('Wheat').toHex()).toBe('#f5deb3');
  });

  test('default token White in HEX format', () => {
    expect(Colors.useDefault().getColor('White').toHex()).toBe('#ffffff');
  });

  test('default token WhiteSmoke in HEX format', () => {
    expect(Colors.useDefault().getColor('WhiteSmoke').toHex()).toBe('#f5f5f5');
  });

  test('default token Yellow in HEX format', () => {
    expect(Colors.useDefault().getColor('Yellow').toHex()).toBe('#ffff00');
  });

  test('default token YellowGreen in HEX format', () => {
    expect(Colors.useDefault().getColor('YellowGreen').toHex()).toBe('#9acd32');
  });

  test('list of default tokens', () => {
    expect(Colors.useDefault().getTokens()).toEqual([
      'AliceBlue',
      'AntiqueWhite',
      'Aqua',
      'Aquamarine',
      'Azure',
      'Beige',
      'Bisque',
      'Black',
      'BlanchedAlmond',
      'Blue',
      'BlueViolet',
      'Brown',
      'BurlyWood',
      'CadetBlue',
      'Chartreuse',
      'Chocolate',
      'Coral',
      'CornflowerBlue',
      'Cornsilk',
      'Crimson',
      'Cyan',
      'DarkBlue',
      'DarkCyan',
      'DarkGoldenRod',
      'DarkGray',
      'DarkGreen',
      'DarkKhaki',
      'DarkMagenta',
      'DarkOliveGreen',
      'DarkOrange',
      'DarkOrchid',
      'DarkRed',
      'DarkSalmon',
      'DarkSeaGreen',
      'DarkSlateBlue',
      'DarkSlateGray',
      'DarkTurquoise',
      'DarkViolet',
      'DeepPink',
      'DeepSkyBlue',
      'DimGray',
      'DodgerBlue',
      'FireBrick',
      'FloralWhite',
      'ForestGreen',
      'Fuchsia',
      'Gainsboro',
      'GhostWhite',
      'Gold',
      'GoldenRod',
      'Gray',
      'Green',
      'GreenYellow',
      'HoneyDew',
      'HotPink',
      'IndianRed',
      'Indigo',
      'Ivory',
      'Khaki',
      'Lavender',
      'LavenderBlush',
      'LawnGreen',
      'LemonChiffon',
      'LightBlue',
      'LightCoral',
      'LightCyan',
      'LightGoldenRodYellow',
      'LightGray',
      'LightGreen',
      'LightPink',
      'LightSalmon',
      'LightSeaGreen',
      'LightSkyBlue',
      'LightSlateGray',
      'LightSteelBlue',
      'LightYellow',
      'Lime',
      'LimeGreen',
      'Linen',
      'Magenta',
      'Maroon',
      'MediumAquaMarine',
      'MediumBlue',
      'MediumOrchid',
      'MediumPurple',
      'MediumSeaGreen',
      'MediumSlateBlue',
      'MediumSpringGreen',
      'MediumTurquoise',
      'MediumVioletRed',
      'MidnightBlue',
      'MintCream',
      'MistyRose',
      'Moccasin',
      'NavajoWhite',
      'Navy',
      'OldLace',
      'Olive',
      'OliveDrab',
      'Orange',
      'OrangeRed',
      'Orchid',
      'PaleGoldenRod',
      'PaleGreen',
      'PaleTurquoise',
      'PaleVioletRed',
      'PapayaWhip',
      'PeachPuff',
      'Peru',
      'Pink',
      'Plum',
      'PowderBlue',
      'Purple',
      'RebeccaPurple',
      'Red',
      'RosyBrown',
      'RoyalBlue',
      'SaddleBrown',
      'Salmon',
      'SandyBrown',
      'SeaGreen',
      'SeaShell',
      'Sienna',
      'Silver',
      'SkyBlue',
      'SlateBlue',
      'SlateGray',
      'Snow',
      'SpringGreen',
      'SteelBlue',
      'Tan',
      'Teal',
      'Thistle',
      'Tomato',
      'Turquoise',
      'Violet',
      'Wheat',
      'White',
      'WhiteSmoke',
      'Yellow',
      'YellowGreen',
    ]);
  });
});