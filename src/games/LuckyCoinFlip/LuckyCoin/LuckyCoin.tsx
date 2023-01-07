import { useAssets } from '@/hooks/useAssets';
import { LuckyCoinMultiplier } from '../LuckyCoinMultiplier';
import classes from './LuckyCoin.module.scss';

export interface LuckyCoinProps extends React.ComponentProps<'div'> {
  value: string;
  color: 'red' | 'blue';
}

export function LuckyCoin({ value, color, className = '', ...divProps }: LuckyCoinProps) {
  const { assets } = useAssets();
  return (
    <div {...divProps} className={`${classes.root} ${className}`.trim()}>
      <img src={assets[`bg_coin_${color}_large.png`]} alt="" />
      <LuckyCoinMultiplier value={value} color={color} className={classes.multiplier} classes={classes} />
    </div>
  );
}
