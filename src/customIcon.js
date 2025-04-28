export const customDivide = {
  tag: 'svg',
  attrs: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 512 512',
    fill: 'currentColor',
  },
  children: [
    {
      tag: 'circle',
      attrs: { cx: '256', cy: '128', r: '32' },
    },
    {
      tag: 'rect',
      attrs: { x: '96', y: '240', width: '320', height: '32', rx: '16' },
    },
    {
      tag: 'circle',
      attrs: { cx: '256', cy: '384', r: '32' },
    },
  ],
};
