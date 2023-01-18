import React, { useMemo } from 'react';
import { SpringValue, animated, useSpring } from '@react-spring/web';
import { GetCyclesStylesOption, getCycleStyles } from '@/utils/circle';
import classes from './Circle.module.scss';
import cx from 'classnames';

export interface CircleProps extends GetCyclesStylesOption, React.ComponentProps<'div'> {
  start?: number; // the start index
  delay?: number; // transiation delay in second
  rotate?: SpringValue<number>;
  opacity?: SpringValue<number>;
  variant?: keyof ReturnType<typeof getCycleStyles>['items'][number];
  renderItem?: (index: number, style: React.CSSProperties) => React.ReactNode;
}

export type suit = 'club' | 'diamond' | 'heart' | 'spade';
export interface CircleItemProps extends React.ComponentProps<'div'> {
  multiplier?: number;
  flipped?: boolean;
  suit?: 'club' | 'diamond' | 'heart' | 'spade';
  back?: 'bg_multiplier' | 'bg_multiplier_flipped' | 'hover' | 'selected' | 'unselected';
}

export function CircleItem({ multiplier, flipped, suit, back, ...divProps }: CircleItemProps) {
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });
  const getPayout = (multiplier: number): number => {
    if (multiplier === undefined) {
      return 0;
    }
    if (multiplier <= 10) {
      return 1;
    } else if (multiplier <= 32) {
      return 2;
    } else if (multiplier <= 80) {
      return 3;
    } else if (multiplier <= 320) {
      return 4;
    } else {
      return 5;
    }
  };

  return (
    <div {...divProps}>
      {multiplier === undefined || suit === undefined ? (
        <></>
      ) : (
        <>
          <animated.div className={classes.item} style={{ opacity: opacity.to(d => 1 - d), transform }}>
            <img
              className={cx(classes.front, classes.back)}
              src={require(`@/assets/bp/pc_icon_tile_bg_multiplier.png`)}
              alt="multiplier"
            />
            <img
              className={cx(classes.front, classes.multiplier)}
              src={require(`@/assets/bp/payout_multipliers/pc_txt_payout${getPayout(multiplier)}_x${multiplier}.png`)}
              alt="multiplier"
            />
          </animated.div>
          <animated.div className={classes.item} style={{ opacity, transform, rotateY: '180deg' }}>
            <img
              className={cx(classes.flipped, classes.back)}
              src={require(`@/assets/bp/pc_icon_tile_${back}.png`)}
              alt="suit"
            />
            <img
              className={cx(classes.flipped, classes.suit)}
              src={require(`@/assets/bp/pc_icon_${suit}_coloured_screen.png`)}
              alt="suit"
            />
          </animated.div>
        </>
      )}
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
    <CircleItem multiplier={index} key={index} style={style}>
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
