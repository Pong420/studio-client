import React from 'react';

// references:
// https://stackoverflow.com/questions/12813573/position-icons-into-circle

export interface GetCyclesStylesOption {
  total: number;
  itemSize: number;
  spcae?: number; // how much extra space we want between images, 1 = one image size,
  adjustment?: number; // adjustment
}

export type ItemStyles = ReturnType<typeof getCycleStyles>['items'][number];

export function getCycleStyles({ total, itemSize, adjustment = 0, spcae = 0.1 }: GetCyclesStylesOption) {
  const tan = Math.max(0, Math.tan(Math.PI / total));
  const radius = ((1 + adjustment + spcae) * 0.5 * itemSize) / tan; // circle radius
  let circleSize = 2 * radius + itemSize;

  if (circleSize === Infinity) {
    circleSize = itemSize;
  }

  const root: React.CSSProperties = {};

  const circle: React.CSSProperties = {
    position: 'relative',
    width: `${circleSize}em`,
    height: `${circleSize}em`,
    clipPath: `circle(50%)`
  };

  const items = Array.from({ length: total }, (_, i) => {
    const rotate = (i * 360) / total - 90;
    const css: React.CSSProperties = {
      position: 'absolute',
      top: `50%`,
      left: `50%`,
      width: `${itemSize}em`,
      height: `${itemSize}em`,
      margin: `${itemSize * -0.5}em`
    };
    const transform = ({ translate: t = (circleSize - itemSize) * 0.5, rotate: r = rotate * -1 }) =>
      `rotate(${rotate}deg) translate(${t}em) rotate(${r}deg)`;

    const _default: React.CSSProperties = { ...css, transform: transform({}) };
    const rotated: React.CSSProperties = { ...css, transform: transform({ rotate: 90 }) };
    const center: React.CSSProperties = { ...css, transform: transform({ translate: 0 }) };

    return {
      rotated,
      center,
      default: _default
    };
  });

  return { root, circle, items };
}
