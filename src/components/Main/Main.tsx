import React from 'react';
import classes from './Main.module.scss';
import { getSectorPoints } from '@/utils/sector';

export interface MainProps {
  top?: React.ReactNode;
  bottom?: React.ReactNode;
  aligment?: boolean;
  background?: boolean;
  buttons?: (React.ComponentProps<'button'> & { text: string })[];
}

const sectorStyles: React.CSSProperties = {
  clipPath: `polygon(${getSectorPoints(75)})`
};

export function Main({ top, bottom, aligment, background, buttons }: MainProps) {
  return (
    <div className={classes.root}>
      <div
        className={[classes.main, aligment && classes.aligment, background && classes.background]
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
      {process.env.NODE_ENV === 'development' && (
        <div className={classes.buttons}>
          {buttons?.map(({ text, ...props }) => (
            <button key={text} {...props}>
              {text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
