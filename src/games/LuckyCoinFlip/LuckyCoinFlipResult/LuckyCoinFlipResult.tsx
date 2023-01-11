import { useSpringValue, animated, to, config } from '@react-spring/web';
import { LuckyCoin, shadowColor } from '../LuckyCoin/LuckyCoin';
import classes from './LuckyCoinFlipResult.module.scss';
import { useEffect } from 'react';

export interface LuckyCoinFlipResultProps {
  value: string;
  variant: 'red' | 'blue' | 'gold';
}

export function LuckyCoinFlipResult({ value, variant }: LuckyCoinFlipResultProps) {
  const scale = useSpringValue(0, { config: config.slow });

  useEffect(() => {
    scale.start(1);
  }, [scale]);

  return (
    <div className={classes.root}>
      <animated.div
        className={classes.coin}
        style={{ scale, opacity: scale, boxShadow: to(scale, n => `0px 0px ${n * 30}px ${shadowColor}`) }}
      >
        <LuckyCoin value={value} variant={variant} />
      </animated.div>
    </div>
  );
}
