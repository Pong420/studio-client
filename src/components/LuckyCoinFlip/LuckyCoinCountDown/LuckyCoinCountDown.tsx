import { useEffect, useState } from 'react';
import { useSpringValue, animated } from '@react-spring/web';
import classes from './LuckyCoinCountDown.module.scss';
import { Layout } from '@/components/Layout';
import { LuckyCoinRing } from '../LuckyCoinRing';

const intiialScale = 16;

export function LuckyCoinCountDown() {
  const [count, setCount] = useState(4);
  const scale = useSpringValue(intiialScale);

  useEffect(() => {
    if (count) {
      const timeout = setTimeout(() => setCount(count - 1), 1000);
      scale.start({ from: intiialScale, to: 1 });
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [count, scale]);

  if (count === 4) {
    return (
      <Layout.Ring>
        <LuckyCoinRing variant="timetoflip" />
      </Layout.Ring>
    );
  }

  return (
    <>
      <Layout.Circle>
        <div className={classes.root} key={count}>
          {count === 0 ? null : (
            <animated.img style={{ scale }} src={require(`@/assets/txt_countdown_${count}.png`)} alt="" />
          )}
        </div>
      </Layout.Circle>
    </>
  );
}
