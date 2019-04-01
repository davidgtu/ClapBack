import { css } from 'styled-components';

const BreakpointWidth = {
  smallScreen: 380,
  tablet: 580,
  tabletLarge: 640,
  tabletXLarge: 768,
  desktop: 800,
  desktopLarge: 1024,
  desktopXLarge: 1280,
  desktopXXLarge: 1920,
};

export const media = Object.keys(BreakpointWidth).reduce(
  (mediaQueries, label) => (
    {
      ...mediaQueries,
      [label]: (...args) => css`
        @media (min-width: ${BreakpointWidth[label]}px) {
          ${css.call(this, ...args)}
        }
      `,
    }
  ),
  {},
);