import { Color } from './color';
import { state } from './colors';

/**
 * A builder class for managing and creating colors.
 * This class provides a fluent interface for adding colors, enabling exception skipping,
 * creating colors based on added color definitions, resetting the state, and destroying the instance.
 */
export class ColorsBuilder {
  /**
   * Adds a color with the specified RGB values and token.
   * @param r The red component (0-255).
   * @param g The green component (0-255).
   * @param b The blue component (0-255).
   * @param token A unique token for the color.
   * @throws Error if the color with the same token already exists.
   * @returns The ColorsBuilder instance.
   */
  addColor(r: number, g: number, b: number, token: string): this | never {
    if (state.colorsTemp[token]) {
      throw new Error(`Color with ${token} token already added.`);
    }

    state.colorsTemp = { ...state.colorsTemp, [token]: new Color(r, g, b, token) };
    return this;
  }

  /**
   * Enables skipping exceptions when creating colors.
   * @returns The ColorsBuilder instance.
   */
  addSkipException(): this {
    state.skipException = true;

    return this;
  }

  /**
   * Creates colors based on added color definitions.
   * @throws Error if colors have already been created.
   * @returns The ColorsBuilder instance.
   */
  create(): this {
    if (!state.created) {
      state.created = true;
      state.colors = { ...state.colorsTemp };
      state.colorsTemp = {};
    }

    if (!state.skipException) {
      throw new Error('Colors have already been created.');
    }

    return this;
  }

  /**
   * Destroys the ColorsBuilder instance and clears all data.
   */
  destroy(): void {
    state.created = false;
    state.colors = {};
    state.colorsTemp = {};
    state.skipException = false;
  }
}