import { useMemo } from 'react';
import { GetCyclesStylesOption, getCycleStyles } from '@/utils/circle';
import classes from './Circle.module.scss';

export interface CircleProps extends GetCyclesStylesOption, React.ComponentProps<'div'> {
  start?: number;
  expand?: boolean;
  delay?: number;
}

export function Circle({
  total,
  itemSize,
  adjustment,
  spcae,
  expand = true,
  start = 0,
  delay = 0,
  children,
  ...props
}: CircleProps) {
  const styles = useMemo(
    () => getCycleStyles({ total, itemSize, adjustment, spcae }),
    [total, itemSize, adjustment, spcae]
  );

  return (
    <div {...props} style={styles.root}>
      <div style={styles.circle}>
        {styles.items.map((styles, i) => {
          const index = i + start;
          const style: React.CSSProperties = {
            ...(expand ? styles.expand : styles.center),
            transitionDelay: `${delay * index}s`
          };
          return (
            <div key={i} className={classes.item} style={style}>
              <div className={classes.text}>{index}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
