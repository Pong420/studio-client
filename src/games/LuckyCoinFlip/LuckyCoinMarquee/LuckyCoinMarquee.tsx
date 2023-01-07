import { Ref, forwardRef, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { animated, to, config, useSpringValue } from '@react-spring/web';
import { LuckyCoinMultiplier } from '../LuckyCoinMultiplier';
import classes from './LuckyCoinMarquee.module.scss';
import { MotionBlur } from '@/components/MotionBlur';

export interface LuckyCoinMarqueeProps {
  multipliers: number[];
}

export interface LuckyCoinMarqueeHandler {
  enter: () => Promise<void>;
  start: () => Promise<void>;
  stop: (idx: number) => Promise<void>;
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

  useImperativeHandle(ref, () => {
    const setup = ({ acceleration = Acceleration }) => {
      let resolve: any;

      const promise = new Promise(r => {
        resolve = r;
      });

      const play = (velocity: number, shouldStop = (_velocity: number) => false) => {
        translate.stop();

        velocity = Math.max(Math.min(velocity, MaxVelocity), InitialVelocity);

        let now = Date.now();

        const totalWidth = getTotalWidth();
        const target = -totalWidth / 3;
        const to = -totalWidth * (2 / 3);
        const from = translate.get();
        const duration = (Math.abs(to) - Math.abs(from)) / velocity;

        if (shouldStop(velocity)) {
          return resolve();
        }

        if (velocity === MaxVelocity) {
          setBlur(true);
        }

        translate.start({
          from,
          to,
          config: {
            duration
          },
          onChange() {
            const dt = Date.now() - now;
            if (dt >= VelocityFequency) {
              play(velocity + acceleration, shouldStop);
              now += dt;
            }
          },
          onRest(r) {
            if (r.finished) {
              translate.set(target);
              setTimeout(() => play(velocity, shouldStop), 1);
            }
          }
        });

        return promise;
      };
      return play;
    };

    const start = setup({});
    // const stop = setup({ acceleration: -0.1 });

    return {
      enter: async () => {
        await translate.start({ from: 0, to: -getTotalWidth() / 3, config: { duration: EnterDuration } });
      },
      start: () => start(InitialVelocity),
      stop: async idx => {
        if (idx >= initialMultipliers.length) {
          return console.warn(`wrong index`);
        }

        const anchor = marqueeRef.current?.children[initialMultipliers.length + idx];

        if (!anchor || !(anchor instanceof HTMLElement)) {
          return console.warn(anchor, ` is is not a HTML element`);
        }

        // await stop(MaxVelocity, v => {
        //   return v <= 1;
        // });

        const totalWidth = getTotalWidth();
        const current = translate.get();
        const to = -anchor.offsetLeft - getVisibleWidth() / 2 - anchor.offsetWidth / 2;

        setBlur(false);

        translate.start({
          from: current <= to ? current + totalWidth / 3 : current,
          to,
          config: {
            ...config.molasses,
            bounce: 0,
            clamp: true
          }
        });
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
        return blur && i >= 9 ? <MotionBlur key={i}>{node}</MotionBlur> : node;
      })}
    </animated.div>
  );
}

export const LuckyCoinMarquee = forwardRef(LuckyCoinMarqueeComponent);
