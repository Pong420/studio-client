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
  const circleSize = 2 * radius + itemSize;

  const root: React.CSSProperties = {};

  const circle: React.CSSProperties = {
    position: 'relative',
    width: `${circleSize}em`,
    height: `${circleSize}em`
  };

  const items = Array.from({ length: total }, (_, i) => {
    const rotate = (i * 360) / total - 90;
    const css: React.CSSProperties = {
      position: 'absolute',
      top: `50%`,
      left: `50%`,
      width: `${itemSize}em`,
      height: `${itemSize}em`,
      margin: `${itemSize * -0.5}em`,
      transform: `rotate(${rotate}deg) translate(${(circleSize - itemSize) * 0.5}em) rotate(${rotate * -1}deg)`
    };
    const transform = (translate: number) => `rotate(${rotate}deg) translate(${translate}em) rotate(${rotate * -1}deg)`;

    const expand: React.CSSProperties = { ...css };
    const center: React.CSSProperties = { ...css, transform: transform(0) };

    return {
      expand,
      center
    };
  });

  return { root, circle, items };
}
