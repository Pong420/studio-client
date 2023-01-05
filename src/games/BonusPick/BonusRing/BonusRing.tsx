import { Ref, forwardRef, useImperativeHandle, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { Circle, CircleItem } from '@/components/Circle';
import classes from './BonusRing.module.scss';

export interface BonusRingProps {}

export interface BonusRingController {
  start: (multipliers: number[]) => Promise<void>;
  rotate: () => Promise<void>;
  end: () => Promise<void>;
}

function BonusRingComponent(_props: BonusRingProps, ref: Ref<BonusRingController>) {
  const [multipliers, setMultipliers] = useState<number[]>([]);
  const [{ rotate, ...ringStyle }, ring] = useSpring(() => ({ opacity: 0, rotate: 0 }));

  useImperativeHandle(ref, () => ({
    start: async (multipliers: number[]) => {
      setMultipliers(multipliers);
      await Promise.all(
        ring.start({
          from: { opacity: 0 },
          to: { opacity: 1 }
        })
      );
    },
    rotate: async () => {
      await Promise.all(
        ring.start((_, ctrl) => {
          return {
            to: { rotate: ctrl.get().rotate + (0.75 / 2) * 360 }
          };
        })
      );
    },
    end: async () => {
      await Promise.all(
        ring.start({
          from: { opacity: 1 },
          to: { opacity: 0 }
        })
      );
      setMultipliers([]);
    }
  }));

  return (
    <animated.div style={ringStyle}>
      <Circle
        variant="rotated"
        className={classes.root}
        total={multipliers.length}
        rotate={rotate}
        itemSize={4.1}
        renderItem={(index, style) => {
          return (
            <CircleItem key={index} style={style}>
              <div>x{multipliers[index]}</div>
            </CircleItem>
          );
        }}
      />
    </animated.div>
  );
}

export const BonusRing = forwardRef(BonusRingComponent);
