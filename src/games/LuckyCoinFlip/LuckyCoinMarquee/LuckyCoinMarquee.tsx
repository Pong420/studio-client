import { Ref, forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { animated, to, useSpringValue } from '@react-spring/web';
import { MotionBlur } from '@/components/MotionBlur';
import { LuckyCoinMultiplier } from '../LuckyCoinMultiplier';
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

function LuckyCoinMarqueeComponent(
  { multipliers: initialMultipliers }: LuckyCoinMarqueeProps,
  ref: Ref<LuckyCoinMarqueeHandler>
) {
  const multipliers = useMemo(
    () => [...initialMultipliers, ...initialMultipliers, ...initialMultipliers],
    [initialMultipliers]
  );
  const [blur, setBlur] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const translate = useSpringValue(0);
  const getTotalWidth = () => marqueeRef.current?.offsetWidth ?? 0;
  const getVisibleWidth = () => marqueeRef.current?.parentElement?.offsetWidth ?? 0;

  useEffect(() => {
    console.info('initial multipliers', initialMultipliers);
  }, [initialMultipliers]);

  useImperativeHandle(ref, () => {
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

        const totalWidth = getTotalWidth();
        const target = -totalWidth / 3;
        const velocity = Math.max(Math.min(option.velocity ?? InitialVelocity, MaxVelocity), InitialVelocity);
        const { from = translate.get(), to = -totalWidth * (2 / 3), repeat = -1, acceleration = 0 } = option;
        const duration = (Math.abs(to) - Math.abs(from)) / velocity;

        setBlur(velocity >= MaxVelocity / 2);

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
                translate.set(target);
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
          return console.warn(`wrong index`);
        }

        const anchor = marqueeRef.current?.children[initialMultipliers.length + idx];

        if (!anchor || !(anchor instanceof HTMLElement)) {
          return console.warn(anchor, ` is is not a HTML element`);
        }

        const to = -anchor.offsetLeft - getVisibleWidth() / 2 - anchor.offsetWidth / 2;

        const velocity = await stop({ velocity: MaxVelocity, repeat: 2, acceleration: -Acceleration });

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
    <animated.div
      className={classes.root}
      style={{ transform: to(translate, x => `translate(${x}px, -50%)`) }}
      ref={marqueeRef}
    >
      {multipliers.map((m, i) => {
        const node = (
          <LuckyCoinMultiplier
            key={i}
            color="red"
            className={classes.multiplier}
            value={m.toString()}
            classes={classes}
          />
        );
        return blur ? <MotionBlur key={i}>{node}</MotionBlur> : node;
      })}
    </animated.div>
  );
}

export const LuckyCoinMarquee = forwardRef(LuckyCoinMarqueeComponent);
