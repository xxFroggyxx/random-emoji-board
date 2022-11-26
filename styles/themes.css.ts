import { createGlobalThemeContract, createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalThemeContract({
  color: {
    white: 'color-white',
    black: 'color-black',
    surface: 'color-surface',
    pink: 'pink',
  },
});

createGlobalTheme(':root', vars, {
  color: {
    white: '#fff',
    black: '#000',
    surface: '#f0f0f0',
    pink: 'pink',
  },
});
