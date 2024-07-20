import { DefaultTheme } from 'styled-components';

const colors = {
  primaryNormal: '#5FCF89',
  primaryStrong: '#30CA7D',
  primaryHeavy: '#269C52',
  primaryPoint: '#30CAA1',
  primaryPoint2: '#055858',
  primaryPoint3: '#00C4B8',
  backgroundNormal: '#FFFFFF',
  backgroundLight: '#EDEDED',
  backgroundPoint: '#427FAA',
  textNormal: '#D9D9D9',
  textLight: '#9B9B9B',
  textStrong: '#8A8A8A',
  textHeavy: '#757575',
  textPoint: '#5D5D5D',
  textNeutral: '#333333',
  textBlack: '#000000',
  error: '#EC5555',
};

const typography = {
  title1: `font-size: 1.75rem; font-weight: 700;`,
  title2: `font-size: 1.5rem; font-weight: 700;`,
  title3: `font-size: 1.5rem; font-weight: 600;`,
  title4: `font-size: 1.375rem; font-weight: 700;`,
  body1: `font-size: 1.25rem; font-weight: 700;`,
  body2: `font-size: 1.25rem; font-weight: 600;`,
  body3: `font-size: 1.25rem; font-weight: 500;`,
  body4: `font-size: 1.125rem; font-weight: 600;`,
  label1: `font-size: 1rem; font-weight: 600;`,
  label2: `font-size: 1rem; font-weight: 500;`,
  label3: `font-size: 1rem; font-weight: 400;`,
  label4: `font-size: 0.9375rem; font-weight: 600;`,
  label5: `font-size: 0.875rem; font-weight: 600;`,
  label6: `font-size: 0.875rem; font-weight: 500;`,
  label7: `font-size: 0.75rem; font-weight: 600;`,
};

export type ColorsType = typeof colors;
export type TypographyType = typeof typography;

const theme: DefaultTheme = {
  colors,
  typography,
};

export { theme };
