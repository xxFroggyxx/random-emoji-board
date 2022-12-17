import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/themes.css';

export const scoreboardTitleStyle = style({
  fontSize: 24,
  marginTop: 24,
  marginBottom: 12,
});

export const scoreboardLayout = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(125px, 1fr))',
  placeItems: 'center',
});

export const scoreboardItem = style({
  marginTop: 12,
  display: 'flex',
  alignItems: 'center',
  gap: 3,
});

export const scoreboardEmoji = style({
  width: 32,
  height: 32,
  backgroundColor: vars.color.surface,
  borderRadius: '50%',
  fontSize: 16,
  display: 'grid',
  placeItems: 'center',
});
export const scoreboardCounter = style({
  height: 24,
  backgroundColor: vars.color.surface,
  borderRadius: 12,
  padding: '0px 16px',
  fontSize: 14,
  display: 'grid',
  placeItems: 'center',
});
