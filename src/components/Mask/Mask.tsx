import { useLayoutEffect, useRef } from 'react';
import { getSectorPoints } from '@/utils/sector';
import { genMaskDataUrl } from './genMaskDataUrl';
import cx from 'classnames';
import classes from './Mask.module.scss';

/**
 * This component
 * 1. Convert a dom element into an image.
 * 2. Then draw the image into the canvas and remove `black` color to transparent
 * 3. Finally, the canvas become a mask
 */

/**
 * This variable control the section of section
 */
export const ExtensionAngle = 75;

const sectorStyles: React.CSSProperties = {
  clipPath: `polygon(${getSectorPoints(ExtensionAngle)})`
};

const aligment = false;

export function Mask() {
  const nodeRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    if (nodeRef.current && canvasRef.current) {
      genMaskDataUrl(nodeRef.current, canvasRef.current);
    }
  }, []);

  return (
    <div className={classes.root}>
      <div ref={nodeRef} className={cx(classes.main, { [classes.aligment]: aligment })}>
        <div className={classes.sector} style={sectorStyles}>
          <div className={classes.ring} />
          <div className={classes.blocker} />
        </div>
        <div className={classes.circle} />
      </div>
      <canvas className={classes.mask} ref={canvasRef} />
    </div>
  );
}
