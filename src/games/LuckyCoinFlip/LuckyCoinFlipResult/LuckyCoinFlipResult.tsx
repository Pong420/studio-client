import { useEffect } from 'react';
import { useSpringValue, animated, to, config } from '@react-spring/web';
import { Layout } from '@/components/Layout';
import { getRandomInt, randomOption } from '@/utils/random';
import { LuckyCoin, shadowColor } from '../LuckyCoin/LuckyCoin';
import classes from './LuckyCoinFlipResult.module.scss';

const variants = ['red', 'blue', 'result'] as const;

export interface LuckyCoinFlipResultProps {
  value?: string;
  variant?: typeof variants[number];
}

export function LuckyCoinFlipResult({
  value = getRandomInt(2, 200).toString(),
  variant = randomOption(variants)
}: LuckyCoinFlipResultProps) {
  const scale = useSpringValue(0, { config: config.slow });

  useEffect(() => {
    scale.start({ from: 0, to: 1 });
  }, [scale]);

  return (
    <Layout.Circle>
      <div className={classes.root}>
        <animated.div
          className={classes.coin}
          style={{ scale, opacity: scale, boxShadow: to(scale, n => `0px 0px ${n * 40}px ${shadowColor}`) }}
        >
          <LuckyCoin value={value} variant={variant} />
        </animated.div>
      </div>
    </Layout.Circle>
  );
}
