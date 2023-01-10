import { useState, useRef, ReactNode } from 'react';
import { Main } from '@/components/Main';
import { LuckyCoinMarquee, LuckyCoinMarqueeHandler } from './LuckyCoinMarquee';
import { LuckyCoinCountDown } from './LuckyCoinCountDown';
import { LuckyCoin, LuckyCoinProps } from './LuckyCoin/LuckyCoin';
import { LuckyCoinFlipResult } from './LuckyCoinFlipResult';

const assetsCtx = require.context('./assets', true, /(\.png|\.jpg)$/);

const coins: LuckyCoinProps[] = [
  { color: 'red', value: '2' },
  { color: 'red', value: '4' },
  { color: 'red', value: '8' },
  { color: 'red', value: '16' },
  { color: 'red', value: '26' },
  { color: 'red', value: '32' },
  { color: 'red', value: '44' },
  { color: 'red', value: '144' },
  { color: 'red', value: '168' },
  { color: 'red', value: '200' },
  { color: 'blue', value: '3' },
  { color: 'blue', value: '17' },
  { color: 'blue', value: '25' },
  { color: 'blue', value: '39' },
  { color: 'blue', value: '41' },
  { color: 'blue', value: '55' },
  { color: 'blue', value: '79' },
  { color: 'blue', value: '163' },
  { color: 'blue', value: '175' },
  { color: 'blue', value: '199' }
];

const Coin = (
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

const CountDown = <LuckyCoinCountDown />;

const Result = <LuckyCoinFlipResult value="17" color="blue" />;

export function LuckyCoinFlip() {
  const marquee = useRef<LuckyCoinMarqueeHandler>(null);
  const [multipliers] = useState(Array.from({ length: 9 }, () => Math.round(Math.random() * 198) + 2));
  const [Marquee] = useState(<LuckyCoinMarquee multipliers={multipliers} ref={marquee} />);
  const [bottom, setBottom] = useState<ReactNode>(Marquee);

  return (
    <Main
      background
      assetsCtx={assetsCtx}
      bottom={bottom}
      buttons={[
        {
          text: 'toggle',
          onClick: () => {
            setBottom(b => {
              const list: any[] = [Marquee, Coin, CountDown, Result];
              const idx = list.findIndex(l => l === b);
              return list[idx === list.length - 1 ? 0 : idx + 1];
            });
          }
        },
        { text: 'marquee.enter', onClick: () => marquee.current?.enter() },
        { text: 'marquee.start', onClick: () => marquee.current?.start() },
        { text: 'marquee.stop', onClick: () => marquee.current?.stop(0) }
      ]}
    />
  );
}
