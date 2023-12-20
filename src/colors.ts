import { Color } from './color';
import { defaultColors } from './default-colors.ts';

/**
 * An array of valid color output types.
 */
const types = ['toHex', 'toRgb', 'toHsl'] as const;

/**
 * Represents the state of color-related data.
 */
interface ColorsState {
  /**
   * A dictionary of colors where keys are color tokens and values are Color objects.
   */
  colors: Record<string, Color>;

  /**
   * A dictionary of temporary colors, if needed, with the same structure as `colors`.
   */
  colorsTemp: Record<string, Color>;

  /**
   * Indicates whether colors have been created or initialized.
   */
  created: boolean;

  /**
   * Indicates whether exceptions should be skipped when working with colors.
   */
  skipException: boolean;

  /**
   * Indicates whether to use default colors
   */
  defaultColors: boolean;
}

/**
 * The global state object for managing color-related data.
 */
export const colorsState: ColorsState = {
  colors: {},
  colorsTemp: {},
  defaultColors: false,
  created: false,
  skipException: false,
};

function getColors(): Record<string, Color> {
  const colors = colorsState.defaultColors ? defaultColors : colorsState.colors;

  colorsState.defaultColors = false;

  return colors;
}

/**
 * Manages and interacts with color data.
 */
export class Colors {
  /**
   * Set the Colors class to use default color values.
   * @returns The Colors class for method chaining.
   */
  static useDefault(): typeof Colors {
    colorsState.defaultColors = true;

    return Colors;
  }

  /**
   * Get the total number of colors.
   * @returns The total number of colors.
   */
  static getTotal(): number {
    return Object.keys(getColors()).length;
  }

  /**
   * Get a list of color tokens.
   * @returns An array of color tokens.
   */
  static getTokens(): string[] {
    return Object.keys(getColors());
  }

  /**
   * Get a list of color types.
   * @returns An array of color types.
   */
  static getTypes(): typeof types {
    return types;
  }

  /**
   * Get color values in the specified format (e.g., 'toHex' or 'toRgb').
   * @param type The output format.
   * @throws Error if an invalid format is specified.
   * @returns An array of color values in the specified format.
   */
  static getValues(type: typeof types[number]): string[] | never {
    if (!types.includes(type)) {
      throw new Error(`Invalid type: '${type}' not recognized`);
    }

    return Object.values(getColors()).map((color) => color[type]());
  }

  /**
   * Get a color by its token.
   * @param token The color token.
   * @throws Error if the color is not found.
   * @returns The Color object corresponding to the token.
   */
  static getColor(token: string): Color | never {
    const color = getColors()[token];

    if (!color) {
      throw new Error(`Invalid token: '${token}' not recognized`);
    }

    return color;
  }
}