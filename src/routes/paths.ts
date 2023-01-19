import { NavigateOptions, Path, generatePath as defaultGeneratePath } from 'react-router-dom';
import { router, IRoutes } from './routes';
import { Params, PathJoin, PathPatternParser, ValidPathsParser } from './helper';

export type PathPatterns = PathJoin<PathPatternParser<IRoutes>, '/'>;

export type ValidPaths = ValidPathsParser<PathPatterns>;

type TP<P> = P | (Omit<Partial<Path>, 'path'> & { pathname: P });
type NOpts = Omit<NavigateOptions, 'relative'>;

export function navigate(to: number): void;
export function navigate(to: ValidPaths): void;
export function navigate<AP extends PathPatterns, PS extends Params<AP>>(
  to: TP<AP>,
  ...[params, options]: PS extends never ? [any?, NOpts?] : [PS, NOpts?]
): void;
export function navigate<AP extends PathPatterns, PS extends Params<AP>>(
  to: number | TP<AP>,
  ...[params, options]: PS extends never ? [any?, NOpts?] : [PS, NOpts?]
): Promise<void> {
  if (typeof to === 'number') {
    return router.navigate(to);
  }

  const path: Partial<Path> = typeof to === 'string' ? { pathname: to } : to;
  path.pathname = path.pathname && defaultGeneratePath(path.pathname, params || {});
  return router.navigate(path, options);
}
