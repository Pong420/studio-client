import { useRef } from 'react';
import { Main } from '@/components/Main';
import { BonusRing, BonusRingController } from './BonusRing';
import { BonusCircle, BonusCircleController } from './BonusCircle';

let multipliers = [2, 3, 4, 5, 10, 15, 20, 25, 30, 40, 50, 100];
while (multipliers.length < 32) {
  multipliers = [...multipliers, ...multipliers].slice(0, 32);
}

export function BonusPick() {
  const ringRef = useRef<BonusRingController>(null);
  const circleRef = useRef<BonusCircleController>(null);

  return (
    <Main
      // aligment
      background
      top={<BonusRing ref={ringRef} />}
      bottom={<BonusCircle ref={circleRef} />}
      buttons={[
        { text: 'Ring Show', onClick: () => ringRef.current?.start(multipliers) },
        { text: 'Ring Rotate', onClick: () => ringRef.current?.rotate() },
        { text: 'Ring Hide', onClick: () => ringRef.current?.end() },
        { text: 'Circle Start', onClick: () => circleRef.current?.start(multipliers) },
        { text: 'Circle Rotate', onClick: () => circleRef.current?.rotate() }
      ]}
    />
  );
}
