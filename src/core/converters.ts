/**
 * Provides conversion utilies between different color systems
 *
 * @module core/converters
 */

/**
 * Extract color components from rgb string
 *
 * @param {string} color A rgb color formatted as rgb(x, y, z)
 *
 * @returns {[number, number, number]} The R, G and B components of color
 */
export function getColorComponents(color: string): [number, number, number] {
  const [R, G, B] = color
    .replace('rgb(', '')
    .replace(')', '')
    .split(',')
    .map(v => parseInt(v, 10));

  return [R, G, B];
}
