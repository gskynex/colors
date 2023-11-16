import { Color } from './color';

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
}

/**
 * The global state object for managing color-related data.
 */
export const state: ColorsState = {
  colors: {},
  colorsTemp: {},
  created: false,
  skipException: false,
};

/**
 * Manages and interacts with color data.
 */
export class Colors {
  /**
   * Get the total number of colors.
   * @returns The total number of colors.
   */
  static getTotal(): number {
    return Object.keys(state.colors).length;
  }

  /**
   * Get a list of color tokens.
   * @returns An array of color tokens.
   */
  static getTokens(): string[] {
    return Object.keys(state.colors);
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

    return Object.values(state.colors).map((color) => color[type]());
  }

  /**
   * Get a color by its token.
   * @param token The color token.
   * @throws Error if the color is not found.
   * @returns The Color object corresponding to the token.
   */
  static getColor(token: string): Color | never {
    const color = state.colors[token];

    if (!color) {
      throw new Error(`Invalid token: '${token}' not recognized`);
    }

    return color;
  }
}