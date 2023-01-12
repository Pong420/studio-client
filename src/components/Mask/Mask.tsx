import { useLayoutEffect, useRef, useState } from 'react';
import { getSectorPoints } from '@/utils/sector';
import { genMaskDataUrl } from './genMaskDataUrl';
import cx from 'classnames';
import classes from './Mask.module.scss';

export const ExtensionAngle = 75;

const sectorStyles: React.CSSProperties = {
  clipPath: `polygon(${getSectorPoints(ExtensionAngle)})`
};

const aligment = false;

export function Mask() {
  const ref = useRef<HTMLDivElement>(null);
  const [url, setUrl] = useState('');

  useLayoutEffect(() => {
    const node = ref.current;
    if (node) {
      genMaskDataUrl(node).then(setUrl);
    }
  }, []);

  return (
    <div className={classes.root}>
      <div ref={ref} className={cx(classes.main, { [classes.aligment]: aligment })}>
        <div className={classes.sector} style={sectorStyles}>
          <div className={classes.ring} />
          <div className={classes.blocker} />
        </div>
        <div className={classes.circle} />
      </div>
      <div className={classes.mask} style={{ backgroundImage: `url(${url})` }}></div>
    </div>
  );
}
