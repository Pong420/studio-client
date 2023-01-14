import { Ref, forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { animated, to, useSpringValue } from '@react-spring/web';
import { Logger } from '@/utils/logger';
import { Layout } from '@/components/Layout';
import { LuckyCoinMultiplier } from '../LuckyCoinMultiplier';
import { LuckyCoinRing } from '../LuckyCoinRing';
import classes from './LuckyCoinMarquee.module.scss';

export interface LuckyCoinMarqueeProps {
  multipliers: number[];
}

export interface LuckyCoinMarqueeHandler {
  enter: () => Promise<void>;
  start: () => Promise<unknown>;
  stop: (idx: number) => Promise<unknown>;
}

const EnterDuration = 2000;
const InitialVelocity = 0.1;
const MaxVelocity = 3;
const VelocityFequency = 250;
const Acceleration = 0.1;

const logger = Logger.create(`LuckCoinFlip`);

function LuckyCoinMarqueeComponent(
  { multipliers: initialMultipliers }: LuckyCoinMarqueeProps,
  ref: Ref<LuckyCoinMarqueeHandler>
) {
  const translate = useSpringValue(0);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [blur, setBlur] = useState(false);
  const multipliers = useMemo(
    () => [...initialMultipliers, ...initialMultipliers, ...initialMultipliers],
    [initialMultipliers]
  );
  // const { setSteps } = useLayoutContext();

  useEffect(() => {
    logger.log('initial multipliers', initialMultipliers);
  }, [initialMultipliers]);

  useImperativeHandle(ref, () => {
    const getTotalWidth = () => marqueeRef.current?.offsetWidth ?? 0;
    const getVisibleWidth = () => marqueeRef.current?.parentElement?.offsetWidth ?? 0;

    const setup = () => {
      let resolve: any;

      const promise = new Promise<number>(r => {
        resolve = r;
      });

      interface PlayOption {
        from?: number;
        to?: number;
        velocity?: number;
        repeat?: number;
        acceleration?: number;
      }

      const play = async (option: PlayOption) => {
        translate.stop();

        let now = Date.now();

        const direction = -1; // -1 from right to left
        const totalWidth = getTotalWidth();
        const oneThirdWidth = totalWidth / 3;
        const twoThirdWidth = totalWidth * (2 / 3);
        const velocity = Math.max(Math.min(option.velocity ?? InitialVelocity, MaxVelocity), InitialVelocity);
        const { from = translate.get(), to = twoThirdWidth * direction, repeat = -1, acceleration = 0 } = option;
        const duration = (Math.abs(to) - Math.abs(from)) / velocity;

        setBlur(velocity >= MaxVelocity * 0.2);

        translate.start({
          from,
          to,
          config: {
            duration
          },
          onChange() {
            const dt = Date.now() - now;
            if (dt >= VelocityFequency) {
              play({ ...option, velocity: velocity + acceleration });
              now += dt;
            }
          },
          onRest(r) {
            if (r.finished) {
              if (repeat !== 0) {
                translate.set(oneThirdWidth * direction);
                setTimeout(() => play({ ...option, repeat: repeat - 1 }), 1);
              } else {
                resolve(velocity);
              }
            }
          }
        });

        return promise;
      };
      return play;
    };

    const start = setup();
    const stop = setup();

    return {
      enter: async () => {
        await translate.start({ from: 0, to: -getTotalWidth() / 3, config: { duration: EnterDuration } });
      },
      start: () => start({ velocity: InitialVelocity, acceleration: Acceleration }),
      stop: async idx => {
        if (idx >= initialMultipliers.length) {
          return logger.warn(`wrong index`);
        }

        const anchor = marqueeRef.current?.children[initialMultipliers.length + idx];

        if (!anchor || !(anchor instanceof HTMLElement)) {
          return logger.warn(`Expect anchor is a HTML element but receive`, anchor);
        }

        const to = -anchor.offsetLeft - getVisibleWidth() / 2 - anchor.offsetWidth / 2;

        const velocity = await stop({ velocity: MaxVelocity, repeat: 3, acceleration: -Acceleration });

        setBlur(false);

        const totalWidth = getTotalWidth();
        const current = translate.get();
        translate.set(current <= to ? current + totalWidth / 3 : current);

        await stop({ to, repeat: 0, velocity });

        setBlur(false);
      }
    };
  });

  return (
    <>
      <Layout.Ring>
        <LuckyCoinRing variant="readytoplay" />
      </Layout.Ring>

      <Layout.Circle>
        <animated.div
          className={classes.root}
          style={{ transform: to(translate, x => `translate(${x}px, -50%)`) }}
          ref={marqueeRef}
        >
          {multipliers.map((m, i) => {
            return (
              <LuckyCoinMultiplier
                key={i}
                variant="plain"
                blur={blur}
                className={classes.multiplier}
                value={m.toString()}
                classes={classes}
              />
            );
          })}
        </animated.div>
      </Layout.Circle>
    </>
  );
}

export const LuckyCoinMarquee = forwardRef(LuckyCoinMarqueeComponent);
