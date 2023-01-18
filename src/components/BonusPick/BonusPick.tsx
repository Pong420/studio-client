import { useEffect, useRef } from 'react';
import { Layout, useLayoutContext } from '@/components/Layout';
import { BonusRing, BonusRingController } from './BonusRing';
import { BonusCircle, BonusCircleController } from './BonusCircle';

let multipliers = [2, 3, 4, 5, 10, 15, 20, 25, 30, 40, 50, 100];
while (multipliers.length < 32) {
  multipliers = [...multipliers, ...multipliers].slice(0, 32);
}

export function BonusPick() {
  const ringRef = useRef<BonusRingController>(null);
  const circleRef = useRef<BonusCircleController>(null);
  const { setActions } = useLayoutContext();

  useEffect(() => {
    setActions([
      { text: 'Ring Show', onClick: () => ringRef.current?.start(multipliers) },
      { text: 'Ring Rotate', onClick: () => ringRef.current?.rotate() },
      { text: 'Ring Hide', onClick: () => ringRef.current?.end() },
      { text: 'Circle Start', onClick: () => circleRef.current?.start(multipliers) },
      { text: 'Circle Flip', onClick: () => circleRef.current?.flip() },
      { text: 'Circle Rotate', onClick: () => circleRef.current?.rotate() },
      { text: 'Change Suit', onClick: () => circleRef.current?.changeSuit() }
    ]);
  }, [setActions]);

  return (
    <>
      <Layout.Ring>
        <BonusRing ref={ringRef} />
      </Layout.Ring>
      <Layout.Circle>
        <BonusCircle ref={circleRef} />
      </Layout.Circle>
    </>
  );
}
