import cx from 'classnames';
import classes from './LuckyCoinRing.module.scss';

export interface LuckyCoinRingProps {
  variant: 'luckycoinflip' | 'timetoflip' | 'readytoplay';
}

export function LuckyCoinRing({ variant }: LuckyCoinRingProps) {
  return <img className={cx(classes.root, variant)} src={require(`@/assets/lcf/banner_${variant}.png`)} alt="" />;
}
