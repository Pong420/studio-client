import { useMatches } from 'react-router-dom';
import { PathPatterns, navigate } from '@/routes';

export interface StepOption<T> {
  selected?: T;
  onChange: (value: T) => unknown;
  options: { label: string; value: T }[];
}

export interface CreateStepsOption<T> {
  path: PathPatterns;
  defaultValue: T;
}

const arrayToObject = <K extends string, V extends [K, V] | K>(payload: V[]) =>
  payload.reduce((r, p) => {
    const [key, value] = typeof p === 'string' ? [p, p] : p;
    return { ...r, [key]: value };
  }, {} as V extends string ? { [K in V]: string } : Record<string, V>);

export function createUseSteps<K extends string, V extends string | number>(
  payload: Record<K, V> | [K, V][] | K[],
  { path, defaultValue }: CreateStepsOption<K>
) {
  const [entries, steps] = Array.isArray(payload)
    ? [payload, arrayToObject(payload as string[])]
    : [Object.entries(payload) as [K, V][], payload];

  const options: StepOption<K | V>['options'] = entries.map(p => {
    const [label, value] = typeof p === 'string' ? [p, p] : p;
    return { label, value };
  });

  const [, param] = path.match(/:(.*)\?/) || path.match(/:(.*)/) || [];

  const onChange = (value: any) => navigate(path, { [param]: value } as any);

  return function useSteps() {
    const [matches] = useMatches().slice(-1);
    const key = (matches.params[param] || defaultValue) as K;
    const step = steps[key];
    return { step, steps, options, onChange };
  };
}
