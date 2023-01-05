import { Ref, forwardRef, useImperativeHandle, useState } from 'react';
import { animated, useSpringValue, useSprings } from '@react-spring/web';
import { Circle, CircleItem, CircleProps } from '@/components/Circle';
import classes from './BonusCircle.module.scss';

const ItemSize = 5;
const circleProps: Pick<CircleProps, 'total' | 'adjustment'>[] = [
  {
    total: 1
  },
  {
    total: 8,
    adjustment: 0.15
  },
  {
    total: 16,
    adjustment: 0.01
  }
];

export interface BonusCircleProps {}

export interface BonusCircleController {
  start: (multipliers: number[]) => Promise<void>;
  rotate: () => Promise<void>;
}

function BonusCircleComponent(_props: BonusCircleProps, ref: Ref<BonusCircleController>) {
  const [multipliers, setMultipliers] = useState<number[]>([]);
  const [circleSprings, circles] = useSprings(circleProps.length, () => ({ opacity: 0, rotate: 0 }));
  const scale = useSpringValue(1);

  useImperativeHandle(ref, () => ({
    start: async multipliers => {
      setMultipliers(multipliers);
      await Promise.all(circles.start(i => ({ opacity: i === 0 ? 1 : 0 })));
      await Promise.all(circles.start({ opacity: 1 }));
    },
    rotate: async () => {
      let stop = false;
      const rotate = (factor = 1): Promise<unknown> =>
        Promise.all(circles.start({ from: { rotate: 0 }, to: { rotate: 360 * factor } })).then(
          () => !stop && rotate(factor * -1)
        );
      rotate();
      await scale.start(0.5);
      await scale.start(1);
      stop = true;
    }
  }));

  return (
    <animated.div className={classes.root} style={{ scale }}>
      {circleProps.map((props, i) => {
        return (
          <Circle
            key={i}
            className={classes.circle}
            itemSize={ItemSize}
            start={circleProps.slice(0, i).reduce((s, i) => s + i.total, 0)}
            opacity={circleSprings[i].opacity}
            rotate={circleSprings[i].rotate}
            renderItem={(idx, style) => (
              <CircleItem key={idx} style={style}>
                x{multipliers[idx]}
              </CircleItem>
            )}
            {...props}
          />
        );
      })}
    </animated.div>
  );
}

export const BonusCircle = forwardRef(BonusCircleComponent);
