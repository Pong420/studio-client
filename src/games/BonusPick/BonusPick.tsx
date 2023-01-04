import { useRef } from 'react';
import { Main } from '@/components/Main';
import { BonusRing, BonusRingController } from './BonusRing';
import { BonusCircle } from './BonusCircle';

let multipliers = [2, 3, 4, 5, 10, 15, 20, 25, 30, 40, 50, 100];
while (multipliers.length < 32) {
  multipliers = [...multipliers, ...multipliers].slice(0, 32);
}

export function BonusPick() {
  const ringRef = useRef<BonusRingController>(null);

  return (
    <Main
      // aligment
      background
      top={<BonusRing ref={ringRef} />}
      bottom={<BonusCircle />}
      buttons={[
        { text: 'ring.start', onClick: () => ringRef.current?.start(multipliers) },
        { text: 'ring.rotate', onClick: () => ringRef.current?.rotate() },
        { text: 'ring.end', onClick: () => ringRef.current?.end() }
      ]}
    />
  );
}
