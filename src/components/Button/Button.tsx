import cx from 'classnames';
import classes from './Button.module.scss';

export function Button(props: React.ComponentProps<'button'>) {
  return <button {...props} className={cx(classes.root, props.className)} />;
}
