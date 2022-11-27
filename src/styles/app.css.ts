import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('body', {
  margin: 0,
  padding: 0,
  fontFamily: 'Inter, sans-serif',
});

export const wrapperStyle = style({ padding: 12 });
