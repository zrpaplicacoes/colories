/**
 * Generates colors on different formats
 *
 * @module core/generators
 */

/**
 * Generates an integer between 0 and 255
 * that represents a arbitrary value for
 * any color channel within the rgb definition.
 *
 * @returns {number} A color component
 */
export function generateColorComponent(): number {
  return Math.floor(Math.random() * 256);
}

/**
 * Generates a random RGB color
 *
 * @returns {string} A rgb color formatted as rgb(x,y,z)
 */
export function generateRGBColor(): string {
  const { r, g, b } = {
    r: generateColorComponent(),
    // tslint:disable-next-line: object-literal-sort-keys
    g: generateColorComponent(),
    b: generateColorComponent(),
  };

  return `rgb(${r},${g},${b})`;
}
