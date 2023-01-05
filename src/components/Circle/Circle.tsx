import React, { useMemo } from 'react';
import { SpringValue, animated } from '@react-spring/web';
import { GetCyclesStylesOption, getCycleStyles } from '@/utils/circle';
import classes from './Circle.module.scss';

export interface CircleProps extends GetCyclesStylesOption, React.ComponentProps<'div'> {
  start?: number; // the start index
  delay?: number; // transiation delay in second
  rotate?: SpringValue<number>;
  opacity?: SpringValue<number>;
  variant?: keyof ReturnType<typeof getCycleStyles>['items'][number];
  renderItem?: (index: number, style: React.CSSProperties) => React.ReactNode;
}

export function CircleItem(props: React.ComponentProps<'div'>) {
  return (
    <div {...props} className={classes.item}>
      <div className={classes.text}>{props.children}</div>
    </div>
  );
}

export function Circle({
  total,
  itemSize,
  adjustment,
  spcae,
  rotate,
  opacity,
  start = 0,
  delay = 0,
  children,
  variant = 'default',
  renderItem = (index, style) => (
    <CircleItem key={index} style={style}>
      {index}
    </CircleItem>
  ),
  ...divProps
}: CircleProps) {
  const styles = useMemo(
    () => getCycleStyles({ total, itemSize, adjustment, spcae }),
    [total, itemSize, adjustment, spcae]
  );

  return (
    <div {...divProps} style={styles.root}>
      <animated.div style={{ ...styles.circle, rotate, opacity }}>
        {styles.items.map((styles, i) => {
          const index = i + start;
          const style: React.CSSProperties = {
            ...styles[variant],
            transitionDelay: `${delay * index}s`
          };
          return renderItem(index, style);
        })}
      </animated.div>
    </div>
  );
}
