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
        { text: 'ring.start', onClick: () => ringRef.current?.start(multipliers) },
        { text: 'ring.rotate', onClick: () => ringRef.current?.rotate() },
        { text: 'ring.end', onClick: () => ringRef.current?.end() },
        { text: 'circle.start', onClick: () => circleRef.current?.start(multipliers) },
        { text: 'circle.rotate', onClick: () => circleRef.current?.rotate() }
      ]}
    />
  );
}
