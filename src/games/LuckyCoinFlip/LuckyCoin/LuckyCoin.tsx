import { useAssets } from '@/hooks/useAssets';
import { LuckyCoinMultiplier } from '../LuckyCoinMultiplier';
import classes from './LuckyCoin.module.scss';

export interface LuckyCoinProps extends React.ComponentProps<'div'> {
  value: string;
  color: 'red' | 'blue';
  glow?: boolean;
}

export function LuckyCoin({ value, color, glow, className = '', ...divProps }: LuckyCoinProps) {
  const { assets } = useAssets();
  return (
    <div {...divProps} className={[classes.root, className, glow && classes.glow].filter(Boolean).join(' ').trim()}>
      <img src={assets[`bg_coin_${color}_large.png`]} alt="" />
      <div className={classes.multiplier}>
        <LuckyCoinMultiplier
          value={value}
          color={color}
          className={classes[`length_${value.length}`]}
          classes={classes}
        />
      </div>
    </div>
  );
}
