import { useEffect } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import { router } from '@/routes';
import { Button } from '@/components/Button';
import { Mask } from '@/components/Mask';
import classes from './Layout.module.scss';
import cx from 'classnames';

export type LayoutAction = React.ComponentProps<'button'> & { text: string };

export interface LayoutProps {
  top?: React.ReactNode;
  bottom?: React.ReactNode;

  /* props for development */
  aligment?: boolean;
  background?: boolean;
  steps?: { onChange: (value: any) => unknown; selected?: any; options: { label: string; value: any }[] };
  actions?: LayoutAction[] | { title?: string; options: LayoutAction[] };
}

export const ExtensionAngle = 75;

const control = process.env.REACT_APP_CONTROL === 'true';

export function Layout({ top, bottom, background, actions: _actions, steps }: LayoutProps) {
  const location = useLocation();
  const loader = useLoaderData() as { title: string };
  const actions = Array.isArray(_actions) ? { options: _actions } : _actions;

  useEffect(() => {
    document.title = loader.title;
  }, [loader]);

  return (
    <div className={classes.root}>
      <div className={cx(classes.main, { [classes.background]: background })}>
        <div className={classes.top}>{top}</div>
        <div className={classes.bottom}>{bottom}</div>
        <Mask />
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

          {!!steps?.options.length && (
            <div className={classes.items}>
              <div className={classes.items_title}>Steps</div>
              <div className={classes.items_content}>
                {steps?.options?.map(({ label, value }) => (
                  <Button key={label} disabled={steps.selected === value} onClick={() => steps.onChange?.(value)}>
                    {label}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {!!actions?.options?.length && (
            <div className={classes.items}>
              <div className={classes.items_title}>{actions.title || 'Animations'}</div>
              <div className={classes.items_content}>
                {actions.options?.map(({ text, ...props }) => (
                  <Button key={text} {...props}>
                    {text}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
