import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/themes.css';

export const historyEmojiStyle = style({
  display: 'inline-flex',
});

export const historyPoint = style({
  zIndex: 1,
  display: 'grid',
  placeItems: 'center',
  backgroundColor: vars.color.surface,
  fontSize: 16,
  width: 36,
  height: 36,
  borderRadius: '50%',
  border: `1px solid ${vars.color.white}`,

  selectors: {
    '&:not(:first-child)': {
      marginLeft: '-16px',
    },
  },
});
