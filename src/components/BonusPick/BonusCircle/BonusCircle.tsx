import { Ref, forwardRef, useImperativeHandle, useState } from 'react';
import { animated, useSpringValue, useSprings } from '@react-spring/web';
import { Circle, CircleItem, CircleProps, suit } from '@/components/Circle';
import classes from './BonusCircle.module.scss';
import { getRandomInt } from '@/utils/random';

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
  flip: () => Promise<void>;
  changeSuit: () => Promise<void>;
}

function BonusCircleComponent(_props: BonusCircleProps, ref: Ref<BonusCircleController>) {
  const [multipliers, setMultipliers] = useState<number[]>([]);
  const [flipped, setFlipped] = useState(false);
  const [suitEnum] = useState(['club', 'diamond', 'heart', 'spade'] as suit[]);
  const getSuit = (len: number) => Array.from(Array(len)).map(_ => suitEnum[getRandomInt(0, suitEnum.length - 1)]);
  const [suits, setSuits] = useState(() => getSuit(40));
  const [circleSprings, circles] = useSprings(circleProps.length, () => ({ opacity: 0, rotate: 0 }));
  const scale = useSpringValue(1);

  useImperativeHandle(ref, () => ({
    start: async multipliers => {
      setMultipliers(multipliers);
      setSuits(getSuit(multipliers.length));
      await Promise.all(circles.start(i => ({ opacity: i === 0 ? 1 : 0 })));
      await Promise.all(circles.start({ opacity: 1 }));
    },
    rotate: async () => {
      let stop = false;
      const rotate = async (factor = 1): Promise<unknown> =>
        circles.current.some(c => !c.idle)
          ? void 0
          : Promise.all(
              circles.start(idx => ({
                from: { rotate: 0 },
                to: { rotate: 360 * factor * (idx % 2 === 0 ? 1 : -1) },
                delay: idx * 50
              }))
            ).then(() => !stop && rotate(factor * -1));
      rotate();
      await scale.start(0.5);
      await scale.start(1);
      stop = true;
    },
    flip: async () => {
      setFlipped(d => !d);
    },
    changeSuit: async () => {
      setSuits(getSuit(multipliers.length));
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
              <CircleItem
                key={idx}
                multiplier={multipliers[idx]}
                flipped={flipped}
                suit={suits[idx]}
                multiplierBack="bg_multiplier"
                flippedBack="bg_multiplier_flipped"
                style={style}
              />
            )}
            {...props}
          />
        );
      })}
    </animated.div>
  );
}

export const BonusCircle = forwardRef(BonusCircleComponent);
