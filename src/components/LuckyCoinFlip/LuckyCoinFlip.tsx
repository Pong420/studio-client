import { useState, useRef, useEffect } from 'react';
import { useLayoutContext } from '@/components/Layout';
import { createUseSteps } from '@/hooks/useSteps';
import { LuckyCoinMarquee, LuckyCoinMarqueeHandler } from './LuckyCoinMarquee';
import { LuckyCoinCountDown } from './LuckyCoinCountDown';
import { LuckyCoinFlipResult } from './LuckyCoinFlipResult';
import { LuckyCoinDisplay } from './LuckyCoinDisplay';
import { LuckyCoinWheel, LuckyCoinWheelHandler } from './LuckyCoinWheel';

const useSteps = createUseSteps(['Wheel', 'Marquee', 'CountDown', 'Result', 'Coins'], {
  path: '/lucky-coin-flip/:step?',
  defaultValue: 'Marquee'
});

export function LuckyCoinFlip() {
  const marquee = useRef<LuckyCoinMarqueeHandler>(null);
  const wheel = useRef<LuckyCoinWheelHandler>(null);
  const [key, setKey] = useState(0);
  const [node, setNode] = useState<React.ReactElement | null>(null);
  const [multipliers] = useState(Array.from({ length: 9 }, () => Math.round(Math.random() * 198) + 2));
  const { steps, step, options, onChange } = useSteps();
  const { setSteps, setActions } = useLayoutContext();

  useEffect(() => {
    if (step === steps.Wheel) {
      setNode(
        <LuckyCoinWheel
          ref={wheel}
          childrenWidth={230}
          multipliers={multipliers}
          background={<div style={{ background: 'black', width: '100%', height: '100%' }}></div>}
        />
      );
      setActions([{ text: 'Start', onClick: () => wheel.current?.spin(1, 10) }]);
    }
    if (step === steps.Marquee) {
      setNode(<LuckyCoinMarquee multipliers={multipliers} ref={marquee} />);
      setActions([
        { text: 'Start (Constant Speed)', onClick: () => marquee.current?.enter() },
        { text: 'Loop (Acceleration)', onClick: () => marquee.current?.start() },
        { text: 'Stop (Deceleration)', onClick: () => marquee.current?.stop(0) }
      ]);
    }

    if (step === steps.CountDown) {
      setNode(<LuckyCoinCountDown key={key} />);
      setActions([{ text: 'Replay', onClick: () => setKey(k => k + 1) }]);
    }

    if (step === steps.Result) {
      setNode(<LuckyCoinFlipResult key={key} />);
      setActions([{ text: 'Replay', onClick: () => setKey(k => k + 1) }]);
    }

    if (step === steps.Coins) {
      setNode(<LuckyCoinDisplay key={key} />);
      setActions(undefined);
    }
  }, [step, steps, setActions, multipliers, key]);

  useEffect(() => {
    setSteps({ onChange, options, selected: step });
  }, [step, options, onChange, setSteps]);

  return node;
}
