import { useState, useRef } from 'react';
import { Layout, LayoutProps } from '@/components/Layout';
import { createUseSteps } from '@/hooks/useSteps';
import { LuckyCoinMarquee, LuckyCoinMarqueeHandler } from './LuckyCoinMarquee';
import { LuckyCoinCountDown } from './LuckyCoinCountDown';
import { LuckyCoinFlipResult } from './LuckyCoinFlipResult';
import { LuckyCoinDisplay } from './LuckyCoinDisplay';

const useSteps = createUseSteps(['Marquee', 'CountDown', 'Result', 'Coins'], {
  path: '/lucky-coin-flip/:step?',
  defaultValue: 'Marquee'
});

export function LuckyCoinFlip() {
  const marquee = useRef<LuckyCoinMarqueeHandler>(null);
  const [key, setKey] = useState(0);
  const [multipliers] = useState(Array.from({ length: 9 }, () => Math.round(Math.random() * 198) + 2));
  const { steps, step, options, onChange } = useSteps();

  const getProps = (): Partial<LayoutProps> => {
    if (step === steps.Marquee) {
      return {
        children: <LuckyCoinMarquee multipliers={multipliers} ref={marquee} />,
        actions: [
          { text: 'Start (Constant Speed)', onClick: () => marquee.current?.enter() },
          { text: 'Loop (Acceleration)', onClick: () => marquee.current?.start() },
          { text: 'Stop (Deceleration)', onClick: () => marquee.current?.stop(0) }
        ]
      };
    }

    if (step === steps.CountDown) {
      return {
        children: <LuckyCoinCountDown key={key} />,
        actions: [{ text: 'Replay', onClick: () => setKey(k => k + 1) }]
      };
    }

    if (step === steps.Result) {
      return {
        children: <LuckyCoinFlipResult key={key} />,
        actions: [{ text: 'Replay', onClick: () => setKey(k => k + 1) }]
      };
    }

    if (step === steps.Coins) {
      return {
        children: <LuckyCoinDisplay />
      };
    }

    return {};
  };

  const props = getProps();

  return (
    <Layout
      background
      {...props}
      steps={{
        options,
        onChange,
        selected: step
      }}
    />
  );
}
