import classes from './LuckyCoinRing.module.scss';

export interface LuckyCoinRingProps {
  variant: 'timetoflip' | 'readytoplay';
}

const heights: Record<LuckyCoinRingProps['variant'], string | number> = {
  timetoflip: '5em',
  readytoplay: '6em'
};

export function LuckyCoinRing({ variant }: LuckyCoinRingProps) {
  return (
    <img
      className={classes.root}
      src={require(`../assets/banner_${variant}.png`)}
      style={{ height: heights[variant] }}
      alt=""
    />
  );
}
