/**
 * Core functionality for luminance and contrast calculation
 *
 * @module core/luminance
 */

import { getColorComponents } from './converters';

/**
 * Calculates the luminance L of any given rgb formatted color
 */
export function luminance(color: string) {
  const [Rl, Gl, Bl] = getColorComponents(color)
    .map(v => v / 255.0)
    .map(v => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));

  return 0.2126 * Rl + 0.7152 * Gl + 0.0722 * Bl;
}

/**
 * Calculates the contrast ratio between a foreground
 * and a background color in the rgb system.
 *
 * @param {string} fgColor - The foreground color
 * @param {string} bgColor  - The background color
 *
 * @returns {number} - The contrast ratio between fgColor and bgColor
 */
export function contrastRatio(fgColor: string, bgColor: string): number {
  return (luminance(fgColor) + 0.05) / (luminance(bgColor) + 0.05);
}
