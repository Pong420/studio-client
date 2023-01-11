import React, { useEffect } from 'react';
import cx from 'classnames';
import { useLoaderData, useLocation } from 'react-router-dom';
import { getSectorPoints } from '@/utils/sector';
import { router } from '@/routes';
import { usePreloadAssets } from '@/hooks/usePreloadAssets';
import { Button } from '@/components/Button';
import classes from './Layout.module.scss';

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

const control = process.env.REACT_APP_CONTROL === 'true';

export function Layout({ assetsCtx, top, bottom, aligment, background, buttons = [] }: LayoutProps) {
  const preload = usePreloadAssets(assetsCtx);
  const location = useLocation();
  const loader = useLoaderData() as { title: string };

  useEffect(() => {
    document.title = loader.title;
  }, [loader]);

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
      {control && (
        <div className={classes.navbar}>
          <div className={classes.head}>
            <div className={classes.back}>
              {location.pathname !== '/' && (
                <svg height="1em" width="1em" viewBox="0 0 48 48" onClick={() => router.navigate('/')}>
                  <path fill="currentColor" d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z" />
                </svg>
              )}
            </div>
            <div className={classes.title}>{loader.title}</div>
          </div>
          <div className={classes.buttons}>
            {buttons?.map(({ text, ...props }) => (
              <Button key={text} {...props}>
                {text}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
