import React from 'react';
import classes from './Main.module.scss';
import { getSectorPoints } from '@/utils/sector';

export interface MainProps {
  top?: React.ReactNode;
  bottom?: React.ReactNode;
  background?: boolean;
}

const sectorStyles: React.CSSProperties = {
  clipPath: `polygon(${getSectorPoints(75.5)})`
};

export function Main({ top, bottom, background }: MainProps) {
  return (
    <div className={[classes.root, background && classes.background].filter(Boolean).join(' ').trim()}>
      <div className={classes.top} style={sectorStyles}>
        <div className={classes.inner}>{top}</div>
      </div>
      <div className={classes.bottom}>{bottom}</div>
    </div>
  );
}
