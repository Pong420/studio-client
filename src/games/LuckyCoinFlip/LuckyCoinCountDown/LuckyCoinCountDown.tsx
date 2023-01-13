import { useEffect, useState } from 'react';
import { useSpringValue, animated } from '@react-spring/web';
import classes from './LuckyCoinCountDown.module.scss';

export function LuckyCoinCountDown() {
  const [count, setCount] = useState(3);
  const scale = useSpringValue(0);

  useEffect(() => {
    if (count) {
      const timeout = setTimeout(() => setCount(count - 1), 1000);
      scale.start({ from: 0, to: 1 });
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [count, scale]);

  return (
    <div className={classes.root} key={count}>
      {count === 0 ? null : (
        <animated.img style={{ scale }} src={require(`@/assets/txt_countdown_${count}.png`)} alt="" />
      )}
    </div>
  );
}
