import cx from 'classnames';
import { LuckyCoinMultiplier } from '../LuckyCoinMultiplier';
import classes from './LuckyCoin.module.scss';

export interface LuckyCoinProps extends React.ComponentProps<'div'> {
  value: string;
  variant: 'red' | 'blue' | 'gold';
  glow?: boolean;
}

export const shadowColor = classes['shadowColor'];

export function LuckyCoin({ value, variant, glow, className = '', ...divProps }: LuckyCoinProps) {
  const backgroundImage = variant === 'gold' ? 'bg_coin_winner_large' : `bg_coin_${variant}_screen`;

  return (
    <div {...divProps} className={cx(classes.root, glow && classes.glow, className)}>
      <img src={require(`../assets/${backgroundImage}.png`)} alt="" />
      <div className={classes.multiplier}>
        <LuckyCoinMultiplier
          value={value}
          variant={variant}
          className={classes[`length_${value.length}`]}
          classes={classes}
        />
      </div>
    </div>
  );
}
