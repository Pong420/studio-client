import cx from 'classnames';
import _classes from './LuckyCoinMultiplier.module.scss';

export interface MultiplierProps extends React.ComponentProps<'div'> {
  value: string;
  variant: 'red' | 'blue' | 'result' | 'plain';
  blur?: boolean;
  classes?: { symbol?: string; number?: string; blur?: string };
}

export function LuckyCoinMultiplier({ value, variant, className = '', classes = {}, blur, ...props }: MultiplierProps) {
  const getImage = (n: string, blur = false) => {
    const image =
      variant === 'plain'
        ? blur
          ? `text_onscreen_multipliers_blurred/txt_multipliers_blurred_${n}.png`
          : `text_onscreen_multipliers_plain/txt_multipliers_still_${n}.png`
        : variant === 'result'
        ? `text_coin_winner/txt_winner_coin_${n}.png`
        : `text_coin_${variant}/txt_${variant}_coin_${n}.png`;
    return require(`@/assets/${image}`);
  };

  const blurImage = (n: string) =>
    blur && variant === 'plain' && <img className={classes.blur} src={getImage(n, true)} alt="" />;

  return (
    <div {...props} className={cx(_classes.root, className)}>
      <div className={classes.symbol}>
        <img src={getImage('x')} alt="" />
        {blurImage('x')}
      </div>
      {(value.match(/\d/g) || []).map((n, i) => (
        <div key={i} className={classes.number}>
          <img src={getImage(n)} alt="" />
          {blurImage(n)}
        </div>
      ))}
    </div>
  );
}
