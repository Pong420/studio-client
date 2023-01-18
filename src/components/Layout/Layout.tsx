import { useEffect, useMemo, useState } from 'react';
import { Outlet, useLocation, useMatches, useOutletContext } from 'react-router-dom';
import { IRoutes, router } from '@/routes';
import { StepOption } from '@/hooks/useSteps';
import { Button } from '@/components/Button';
import { Mask } from '@/components/Mask';
import classes from './Layout.module.scss';
import cx from 'classnames';

export interface LayoutProps {
  control?: boolean;
  variant?: string;

  /* props for development */
  aligment?: boolean;
  background?: boolean;
}

export type LayoutAction = React.ComponentProps<'button'> & { text: string };

export interface LayoutContext {
  setActions: (payload?: LayoutAction[] | { title?: string; options: LayoutAction[] }) => void;
  setSteps: (payload: StepOption<any>) => void;
}

export const useLayoutContext = () => useOutletContext() as LayoutContext;

export function Layout({
  background,
  aligment,
  control = true,
  variant = process.env.REACT_APP_LAYOUT || 'single'
}: LayoutProps) {
  const location = useLocation();
  const handle = useMatches().slice(-1)[0].handle as IRoutes['children'][number]['handle'];
  const [actions, setActions] = useState<{ title?: string; options: LayoutAction[] }>();
  const [steps, setSteps] = useState<StepOption<any>>();
  const context = useMemo(
    (): LayoutContext => ({
      setActions: payload => setActions(Array.isArray(payload) ? { options: payload } : payload),
      setSteps: payload => setSteps(payload)
    }),
    []
  );

  useEffect(() => {
    document.title = handle.title;
    return () => {
      setSteps(undefined);
      setActions(undefined);
    };
  }, [handle]);

  return (
    <div className={cx(classes.root, variant)}>
      <div className={classes.leftScreen} />

      <div className={classes.rightScreen}>
        <div className={cx(classes.main, { [classes.background]: background })}>
          <Outlet context={context} />
          <Mask aligment={aligment} />
        </div>
      </div>

      {control && (
        <div className={classes.control}>
          <div className={classes.head}>
            <div className={classes.back}>
              {location.pathname !== '/' && (
                <svg height="1em" width="1em" viewBox="0 0 48 48" onClick={() => router.navigate('/')}>
                  <path fill="currentColor" d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z" />
                </svg>
              )}
            </div>
            <div className={classes.title}>{handle.title}</div>
          </div>

          {!!steps?.options.length && (
            <div className={classes.items}>
              <div className={classes.itemsTitle}>Steps</div>
              <div className={classes.itemsContent}>
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
              <div className={classes.itemsTitle}>{actions.title || 'Animations'}</div>
              <div className={classes.itemsContent}>
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

Layout.Ring = function (props: React.ComponentProps<'div'>) {
  return <div className={classes.ring} {...props} />;
};

Layout.Circle = function (props: React.ComponentProps<'div'>) {
  return <div className={classes.circle} {...props} />;
};
