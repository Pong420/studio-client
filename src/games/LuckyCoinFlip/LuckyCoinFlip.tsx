import { useState, useRef, ReactNode } from 'react';
import { Main } from '@/components/Main';
import { LuckyCoinMarquee, LuckyCoinMarqueeHandler } from './LuckyCoinMarquee';
import { LuckyCoinCountDown } from './LuckyCoinCountDown';
import { LuckyCoin } from './LuckyCoin/LuckyCoin';

const assetsCtx = require.context('./assets', true, /(\.png|\.jpg)$/);

const Coin = <LuckyCoin color="red" value="123" style={{ width: '15em' }} glow />;
const CountDown = <LuckyCoinCountDown />;

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
              const list: any[] = [Marquee, Coin, CountDown];
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
