import { useEffect } from 'react';
import { useSpringValue, animated, to, config } from '@react-spring/web';
import { Layout } from '@/components/Layout';
import { LuckyCoin, shadowColor } from '../LuckyCoin/LuckyCoin';
import classes from './LuckyCoinFlipResult.module.scss';

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
    <Layout.Circle>
      <div className={classes.root}>
        <animated.div
          className={classes.coin}
          style={{ scale, opacity: scale, boxShadow: to(scale, n => `0px 0px ${n * 30}px ${shadowColor}`) }}
        >
          <LuckyCoin value={value} variant={variant} />
        </animated.div>
      </div>
    </Layout.Circle>
  );
}
