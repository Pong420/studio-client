import React from 'react';
import cx from 'classnames';
import { getSectorPoints } from '@/utils/sector';
import { usePreloadAssets } from '@/hooks/usePreloadAssets';
import classes from './Layout.module.scss';
import { Button } from '../Button';
import { router } from '@/routes';

export interface LayoutProps {
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

export function Layout({ assetsCtx, top, bottom, aligment, background, buttons = [] }: LayoutProps) {
  const preload = usePreloadAssets(assetsCtx);

  if (!preload.done) {
    return null;
  }

  return (
    <div className={classes.root}>
      <div className={cx(classes.main, { [classes.aligment]: aligment, [classes.background]: background })}>
        <div className={classes.sector} style={sectorStyles}>
          <div className={classes.ring} />
          <div className={classes.top}>{top}</div>
          <div className={classes.blocker} />
        </div>
        <div className={classes.bottom}>{bottom}</div>
      </div>
      {isDevelopment && (
        <div className={classes.buttons}>
          {[
            {
              text: 'Go Back',
              onClick: () => router.navigate('/')
            },
            ...buttons
          ]?.map(({ text, ...props }) => (
            <Button key={text} {...props}>
              {text}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
