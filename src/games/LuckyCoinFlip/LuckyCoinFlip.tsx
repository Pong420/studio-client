import { useState, useRef } from 'react';
import { Layout, LayoutProps } from '@/components/Layout';
import { LuckyCoinMarquee, LuckyCoinMarqueeHandler } from './LuckyCoinMarquee';
import { LuckyCoinCountDown } from './LuckyCoinCountDown';
import { LuckyCoin, LuckyCoinProps } from './LuckyCoin/LuckyCoin';
import { LuckyCoinFlipResult } from './LuckyCoinFlipResult';
import { LuckyCoinRing } from './LuckyCoinRing';

const assetsCtx = require.context('./assets', true, /(\.png|\.jpg)$/);

const coins = ['red', 'blue', 'gold'].flatMap((v, i) =>
  [1, 4, 16, 32, 100].map<LuckyCoinProps>(m => {
    return { variant: v as LuckyCoinProps['variant'], value: '' + m * (i + 1) };
  })
);

const Coins = (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: `repeat(5, auto)`,
      alignItems: 'center',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      padding: `10%`,
      gap: `10px`
    }}
  >
    {coins.map((p, i) => (
      <LuckyCoin key={i} {...p} />
    ))}
  </div>
);

enum Stage {
  Marquee,
  CountDown,
  Result,
  Coins
}

const stages = Object.values(Stage).filter((s): s is Stage => typeof s === 'number');
const getNextStage = (stage: Stage) => {
  const idx = stages.indexOf(stage);
  return stages[idx === stages.length - 1 ? 0 : idx + 1];
};

export function LuckyCoinFlip() {
  const marquee = useRef<LuckyCoinMarqueeHandler>(null);
  const [key, setKey] = useState(0);
  const [multipliers] = useState(Array.from({ length: 9 }, () => Math.round(Math.random() * 198) + 2));
  const [stage, setStage] = useState(Stage.Marquee);

  const getProps = (): Partial<LayoutProps> => {
    if (stage === Stage.Marquee) {
      return {
        top: <LuckyCoinRing variant="readytoplay" />,
        bottom: <LuckyCoinMarquee multipliers={multipliers} ref={marquee} />,
        buttons: [
          { text: 'Start (Constant Speed)', onClick: () => marquee.current?.enter() },
          { text: 'Loop (Acceleration)', onClick: () => marquee.current?.start() },
          { text: 'Stop (Deceleration)', onClick: () => marquee.current?.stop(0) }
        ]
      };
    }

    if (stage === Stage.CountDown) {
      return {
        top: <LuckyCoinRing variant="timetoflip" />,
        bottom: <LuckyCoinCountDown key={key} />,
        buttons: [{ text: 'Replay', onClick: () => setKey(k => k + 1) }]
      };
    }

    if (stage === Stage.Result) {
      return {
        top: <LuckyCoinRing variant="timetoflip" />,
        bottom: <LuckyCoinFlipResult variant="red" value={'' + (Math.round(Math.random() * 200) + 2)} key={key} />,
        buttons: [{ text: 'Replay', onClick: () => setKey(k => k + 1) }]
      };
    }

    if (stage === Stage.Coins) {
      return {
        bottom: Coins
      };
    }

    return {};
  };

  const props = getProps();
  const nextStage = getNextStage(stage);

  return (
    <Layout
      background
      assetsCtx={assetsCtx}
      {...props}
      buttons={[
        {
          text: `Next (${Stage[nextStage]})`,
          onClick: () => setStage(nextStage)
        },
        ...(props.buttons || [])
      ]}
    />
  );
}
