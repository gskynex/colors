/**
 * Represents a color object with red (r), green (g), and blue (b) components.
 */
export class Color {
  readonly #r: number;
  readonly #g: number;
  readonly #b: number;
  readonly #token: string;

  /**
   * Creates a new Color instance.
   * @param r The red component (0-255).
   * @param g The green component (0-255).
   * @param b The blue component (0-255).
   * @param token A unique token for the color.
   */
  constructor(r: number, g: number, b: number, token: string) {
    if (![r, g, b].every((value) => value >= 0 && value <= 255)) {
      throw new Error('Validation error: Values should be within the range of 0 to 255.');
    }

    if (!(token.trim() && token.length)) {
      throw new Error('Validation error: Token must not be empty or consist only of whitespace.');
    }

    this.#r = r;
    this.#g = g;
    this.#b = b;
    this.#token = token.trim();
  }

  /**
   * Gets the red component of the color.
   * @returns The red component (0-255).
   */
  get r(): number {
    return this.#r;
  }

  /**
   * Gets the green component of the color.
   * @returns The green component (0-255).
   */
  get g(): number {
    return this.#g;
  }

  /**
   * Gets the blue component of the color.
   * @returns The blue component (0-255).
   */
  get b(): number {
    return this.#b;
  }

  /**
   * Gets the token associated with the color.
   * @returns The color's token.
   */
  get token(): string {
    return this.#token;
  }

  /**
   * Converts the color to an RGB string representation.
   * @returns An RGB string (e.g., 'rgb(255, 0, 0)').
   */
  toRgb(): string {
    return `rgb(${this.#r}, ${this.#g}, ${this.#b})`;
  }

  /**
   * Converts the color to an RGBA string representation.
   * @param alpha The alpha (opacity) value (0-1).
   * @returns An RGBA string (e.g., 'rgba(255, 0, 0, 0.5)').
   */
  toRgba(alpha: number): string {
    if (alpha < 0 || alpha > 1) {
      throw new Error('Validation error: Alpha should be within the range of 0 to 1.');
    }

    return `rgba(${this.#r}, ${this.#g}, ${this.#b}, ${alpha})`;
  }

  /**
   * Converts the color to a hexadecimal string representation.
   * @returns A hexadecimal string (e.g., '#FF0000').
   */
  toHex(): string {
    const data = this.toArray()
      .map((d) => d.toString(16))
      .map((d) => d.length < 2 ? `0${d}` : d)
      .join('')

    return `#${data}`;
  }

  /**
   * Converts the color to an array of red, green, and blue components.
   * @returns An array containing [r, g, b] values.
   */
  toArray(): number[] {
    return [this.#r, this.#g, this.#b];
  }
}