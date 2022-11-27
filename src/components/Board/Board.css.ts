import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/themes.css';

export const boardStyle = style({
  userSelect: 'none',
  border: `2px solid ${vars.color.black}`,
  borderRadius: 4,
  height: '80vh',
  overflow: 'hidden',
  position: 'relative',
});

export const pointStyle = style({
  pointerEvents: 'none',
  position: 'absolute',
  top: 'var(--top)',
  left: 'var(--left)',
  transform: 'translate(-50%, -50%)',
});
