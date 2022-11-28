import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/themes.css';

export const buttonsStyle = style({
  display: 'grid',
  gridAutoFlow: 'column',
  gap: 4,
});

export const buttonStyle = style({
  padding: '4px 12px',
  backgroundColor: vars.color.surface,
  borderRadius: 4,
  border: 'none',
  color: vars.color.black,

  fontSize: 16,
  fontFamily: 'inherit',
  fontWeight: '700',

  transition: 'outline 0.1s ease',

  selectors: {
    '&:enabled': {
      cursor: 'pointer',
    },
    '&:disabled': {
      opacity: 0.5,
    },
    '&:hover, &:focus': {
      outline: `${vars.color.black} 3px solid`,
    },
  },
});
