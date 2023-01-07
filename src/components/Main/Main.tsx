import React from 'react';
import { getSectorPoints } from '@/utils/sector';
import { AssetsProvider } from '@/hooks/useAssets';
import classes from './Main.module.scss';

export interface MainProps {
  top?: React.ReactNode;
  bottom?: React.ReactNode;
  assetsCtx?: __WebpackModuleApi.RequireContext;

  /* props for development */
  aligment?: boolean;
  background?: boolean;
  buttons?: (React.ComponentProps<'button'> & { text: string })[];
}

export const ExtensionAngle = 75;

const sectorStyles: React.CSSProperties = {
  clipPath: `polygon(${getSectorPoints(ExtensionAngle)})`
};

const isDevelopment = process.env.NODE_ENV === 'development';

export function Main({ assetsCtx, top, bottom, aligment, background, buttons }: MainProps) {
  return (
    <AssetsProvider assetsCtx={assetsCtx}>
      <div className={classes.root}>
        <div
          className={[
            //
            classes.main,
            aligment && isDevelopment && classes.aligment,
            background && isDevelopment && classes.background
          ]
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
        {isDevelopment && (
          <div className={classes.buttons}>
            {buttons?.map(({ text, ...props }) => (
              <button key={text} {...props}>
                {text}
              </button>
            ))}
          </div>
        )}
      </div>
    </AssetsProvider>
  );
}
