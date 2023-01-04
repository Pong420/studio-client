import { useEffect, useState } from 'react';
import { Circle, CircleProps } from '@/components/Circle';
import { Main } from '@/components/Main';
import classes from './BonusPick.module.scss';

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

export function BonusPick() {
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
    <Main
      // background
      // top={<div className={classes.test} />}
      bottom={
        <>
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
        </>
      }
    ></Main>
  );
}
