import classes from './MotionBlur.module.scss';

export function MotionBlur({ children }: React.PropsWithChildren) {
  return (
    <div className={classes.root}>
      <div className={classes.blurredWrapper}>
        <div className={classes.blurred}>{children}</div>
      </div>
      {children}
    </div>
  );
}
