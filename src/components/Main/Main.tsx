import React from 'react';
import classes from './Main.module.scss';
import { getSectorPoints } from '@/utils/sector';

export interface MainProps {
  top?: React.ReactNode;
  bottom?: React.ReactNode;
  aligment?: boolean;
  background?: boolean;
}

const sectorStyles: React.CSSProperties = {
  clipPath: `polygon(${getSectorPoints(75)})`
};

export function Main({ top, bottom, aligment, background }: MainProps) {
  return (
    <div
      className={[classes.root, aligment && classes.aligment, background && classes.background]
        .filter(Boolean)
        .join(' ')
        .trim()}
    >
      <div className={classes.sector} style={sectorStyles}>
        <div className={classes.ring} />
        <div className={classes.top}>{top}</div>
        <div className={classes.blocker} />
      </div>
      <div className={classes.bottom}>{bottom}</div>
    </div>
  );
}
