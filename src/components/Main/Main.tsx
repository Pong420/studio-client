import { useEffect, useState } from 'react';
import { Circle, CircleProps } from '@/components/Circle';
import classes from './Main.module.scss';

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

export function Main() {
  const [expand, setExpand] = useState(true);

  useEffect(() => {
    const onClick = () => {
      setExpand(e => !e);
    };
    window.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <div className={classes.root}>
      {circles.map((props, i) => {
        return (
          <Circle
            key={i}
            className={classes.circle}
            expand={expand}
            itemSize={ItemSize}
            start={circles.slice(0, i).reduce((s, i) => s + i.total, 0)}
            {...props}
          />
        );
      })}
    </div>
  );
}
