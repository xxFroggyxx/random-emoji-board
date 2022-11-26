import { vars } from '@/styles/themes.css';
import { style } from '@vanilla-extract/css';

export const board = style({
  userSelect: 'none',
  border: `2px solid ${vars.color.black}`,
  borderRadius: 4,
  height: '80vh',
  overflow: 'hidden',
  position: 'relative',
});
