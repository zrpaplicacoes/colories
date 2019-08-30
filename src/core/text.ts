/**
 * Feature for handling color with text
 *
 * @module core/text
 */

import { contrastRatio } from './luminance';

/**
 * Returns the optimal text color between pure white
 * and pure black based on the provided background color
 *
 * @param {string} bgColor - A RGB representation of the background color
 *
 * @returns {string} The color (black or white) to apply to text
 */
export function getOptimalTextColorForContrast(bgColor: string): string {
  const [contrastBlack, contrastWhite] = [
    contrastRatio(bgColor, 'rgb(0,0,0)'),
    contrastRatio('rgb(255,255,255', bgColor),
  ];

  return contrastBlack > contrastWhite ? 'rgb(0,0,0)' : 'rgb(255,255,255)';
}
