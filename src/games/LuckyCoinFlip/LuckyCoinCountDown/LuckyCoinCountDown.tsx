import { useEffect, useState } from 'react';
import { useAssets } from '@/hooks/useAssets';
import classes from './LuckyCoinCountDown.module.scss';

const color = 'red';

export function LuckyCoinCountDown() {
  const { assets } = useAssets();
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count) {
      const timeout = setTimeout(() => setCount(count - 1), 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [count]);

  return (
    <div className={classes.root} key={count}>
      <img src={assets[`text_coin_${color}/txt_${color}_coin_${count}.png`]} alt="" />
    </div>
  );
}
