import raw from '../palette.json';

export const CodeRoles = ['foreground', 'keyword', 'function', 'type', 'string', 'constant', 'param', 'regex'] as const;

export const Variants = [
  { id: 'dusk', ...raw.dusk },
  { id: 'petal', ...raw.petal },
];
export type Variant = (typeof Variants)[number];
export type Output = { path: string; text: string };
