import cx from 'classnames';
import { LuckyCoinMultiplier } from '../LuckyCoinMultiplier';
import classes from './LuckyCoin.module.scss';

export interface LuckyCoinProps extends React.ComponentProps<'div'> {
  value: string;
  color: 'red' | 'blue';
  glow?: boolean;
}

export const shadowColor = classes['shadowColor'];

export function LuckyCoin({ value, color, glow, className = '', ...divProps }: LuckyCoinProps) {
  return (
    <div {...divProps} className={cx(classes.root, glow && classes.glow, className)}>
      <img src={require(`../assets/bg_coin_${color}_large.png`)} alt="" />
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