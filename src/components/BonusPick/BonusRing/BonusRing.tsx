import { Ref, forwardRef, useImperativeHandle, useState } from 'react';
import { animated, useSpringValue } from '@react-spring/web';
import { Circle, CircleItem } from '@/components/Circle';
import { ExtensionAngle } from '@/components/Mask';
import classes from './BonusRing.module.scss';

export interface BonusRingProps {}

export interface BonusRingController {
  start: (multipliers: number[]) => Promise<void>;
  rotate: () => Promise<void>;
  end: () => Promise<void>;
}

function BonusRingComponent(_props: BonusRingProps, ref: Ref<BonusRingController>) {
  const [multipliers, setMultipliers] = useState<number[]>([]);
  const opacity = useSpringValue(0);
  const rotate = useSpringValue(0);

  useImperativeHandle(ref, () => ({
    start: async (multipliers: number[]) => {
      setMultipliers(multipliers);
      await opacity.start(1);
    },
    rotate: async () => {
      if (!rotate.idle) return;
      rotate.start(rotate.get() + ExtensionAngle * 0.01 * 0.5 * 360);
    },
    end: async () => {
      await opacity.start(0);
      setMultipliers([]);
    }
  }));

  return (
    <animated.div style={{ opacity }}>
      <Circle
        variant="rotated"
        className={classes.root}
        total={multipliers.length}
        rotate={rotate}
        itemSize={4.1}
        renderItem={(idx, style) => {
          return <CircleItem multiplier={multipliers[idx]} key={idx} style={style} />;
        }}
      />
    </animated.div>
  );
}

export const BonusRing = forwardRef(BonusRingComponent);
