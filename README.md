## @njs-lib/colors

### Overview

The library aims to simplify and standardize color management in web development. It provides a convenient and structured tool for creating, organizing, and managing colors in projects.

**Features**

 - Create Color Objects: Create color objects with red (r), green (g), and blue (b) components and assign unique tokens to them.
 - Convert to Different Formats: Easily convert colors to different formats such as RGB and hexadecimal.
 - Colors creating: Use the ColorsBuilder class to create your colors collection.
 - Get Color Information: Access color properties and methods for comprehensive color information.

### Installation

You can install the library using npm or yarn.

#### Using npm:

For more information on using `npm` check out the docs [here](https://docs.npmjs.com/cli/v10/commands/npm-install).

```shell
npm install @njs-lib/colors --save
```

#### Using yarn:

For more information on using `yarn` check out the docs [here](https://yarnpkg.com/getting-started/usage#installing-all-the-dependencies).

```shell
yarn add @njs-lib/colors
```

### Color Class

The Color class represents a color object with red (r), green (g), and blue (b) components.

#### Constructor

##### `new Color(r: number, g: number, b: number, token: string)`

Creates a new `Color` instance.

- `r`: The red component (0-255).
- `g`: The green component (0-255).
- `b`: The blue component (0-255).
- `token`: A unique token for the color.

#### Getters

##### `r: number`

Gets the red component of the color (0-255).

##### `g: number`

Gets the green component of the color (0-255).

##### `b: number`

Gets the blue component of the color (0-255).

##### `token: string`

Gets the token associated with the color.

#### Methods

##### `toRgb(): string`

Converts the color to an RGB string representation (e.g., 'rgb(255, 0, 0)').

##### `toRgba(alpha: number): string`

Converts the color to an RGBA string representation (e.g., 'rgba(255, 0, 0, 0.5)').

##### `toHex(): string`

Converts the color to a hexadecimal string representation (e.g., '#FF0000').

##### `toHsl(): string`

Converts the color to a Human-Readable HSL string representation (e.g., 'hsl(0deg, 100%, 50%)').

##### `toArray(): number[]`

Converts the color to an array of red, green, and blue components.

#### Example

```javascript
import { Color } from '@njs-lib/colors';

const red = new Color(255, 0, 0, 'red');

red.toHex();      // Output: #FF0000
red.toRgb();      // Output: rgb(255, 0, 0)
red.toRgba(0.2);  // Output: rgba(255, 0, 0, 0.2)
red.toHsl();      // Output: hsl(0deg, 100%, 50%)
red.toArray();    // Output: [255, 0, 0]
```

### ColorsBuilder Class

A builder class for creating colors. This class provides a fluent interface for adding colors, enabling exception skipping, creating colors based on added color definitions and destroying the instance.

#### Constructor

##### `new ColorBuilder()`

Creates a new `ColorBuilder` instance.

#### Methods

##### `addColor(r, g, b, token)`

Adds a color with the specified RGB values and token.

- `r` (number): The red component (0-255).
- `g` (number): The green component (0-255).
- `b` (number): The blue component (0-255).
- `token` (string): A unique token for the color.

##### `addSkipException()`

Enables skipping exceptions when creating colors.

##### `create()`

Creates colors based on added color definitions.

##### `destroy()`

Destroys the `ColorsBuilder` instance and clears all data.

#### Example

```javascript
import { ColorsBuilder } from '@njs-lib/colors';

const colorsBuilder = new ColorsBuilder()
  .addColor(255, 255, 255, 'white')
  .addColor(255, 0, 0, 'red')
  .addColor(0, 255, 0, 'green')
  .create();

colorsBuilder.destroy();
```

### Colors Class

Manages and interacts with color data.

#### Methods

##### `static getTotal()`

Get the total number of colors.

##### `static getTokens()`

Get a list of color tokens.

##### `static getTypes()`

Get a list of color types.

##### `static getValues(type)`

Get color values in the specified format (e.g., 'toHex' or 'toRgb' or 'toHsl').

##### `static getColor(token)`

Get a color by its token (e.g., 'white' or 'black').

##### `static useDefault()`

Set the Colors class to use default color values.

#### Example

```javascript
import { Colors } from '@njs-lib/colors';

Colors.getTotal();                       // 2
Colors.getTokens();                      // ["black", "white"]
Colors.getTypes();                       // ["toHex", "toRgb", "toHsl"]
Colors.getColor('black');                // Black Color
Colors.getColor('black').toHex();        // #000000
Colors.getColor('black').toRgb();        // rgb(0, 0, 0)
Colors.getColor('black').toRgba(0.4);    // rgba(0, 0, 0, 0.4)
Colors.getColor('black').toHsl();        // hsl(0deg, 0%, 0%)
Colors.getValues('toHex');               // ["#000000", "#ffffff"]
Colors.getValues('toRgb');               // ["rgb(0, 0, 0)", "rgb(255, 255, 255)"]
Colors.getValues('toHsl');               // ["hsl(0deg, 0%, 0%)", "hsl(0deg, 0%, 100%)"]

Colors.useDefault().getTotal();          // 141
Colors.useDefault().getTokens();         // ["AliceBlue", "AntiqueWhite", etc]
Colors.useDefault().getTypes();          // ["toHex", "toRgb", "toHsl"]
Colors.useDefault().getColor('AliceBlue');            // AliceBlue Color
```