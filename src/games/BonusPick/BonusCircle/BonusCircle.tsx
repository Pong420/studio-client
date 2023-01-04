import { Circle, CircleProps } from '@/components/Circle';
import classes from './BonusCircle.module.scss';

const ItemSize = 5;
const circles: Pick<CircleProps, 'total' | 'adjustment'>[] = [
  {
    total: 16,
    adjustment: 0.01
  },
  {
    total: 8,
    adjustment: 0.15
  },
  {
    total: 1
  }
];

export function BonusCircle() {
  return (
    <>
      {circles.map((props, i) => {
        return (
          <Circle
            key={i}
            className={classes.circle}
            itemSize={ItemSize}
            start={circles.slice(0, i).reduce((s, i) => s + i.total, 0)}
            {...props}
          />
        );
      })}
    </>
  );
}
