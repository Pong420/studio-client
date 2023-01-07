import { useAssets } from '@/hooks/useAssets';
import classes from './LuckyCoinMultiplier.module.scss';

export interface MultiplierProps extends React.ComponentProps<'div'> {
  value: string;
  color: 'red' | 'blue';
}

export function LuckyCoinMultiplier({ value, color, className = '', ...props }: MultiplierProps) {
  const { assets } = useAssets();
  const getImage = (n: string) => assets[`text_coin_${color}/txt_${color}_coin_${n}.png`];

  return (
    <div {...props} className={`${classes.root} ${classes[`length_${value.length} ${className}`.trim()]}`}>
      <div className={classes.symbol}>
        <img src={getImage('x')} alt="" />
      </div>
      {(value.match(/\d/g) || []).map((n, i) => (
        <div key={i} className={classes.number}>
          <img src={getImage(n)} alt="" />
        </div>
      ))}
    </div>
  );
}
