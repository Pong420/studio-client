import { RouteObject } from 'react-router-dom';

export type PathJoin<T extends any[], U extends string | number, R extends string = ''> = T extends [
  infer F,
  ...infer Rest
]
  ? F extends string
    ? F extends ''
      ? PathJoin<Rest, U, `${R}${F}`>
      : PathJoin<Rest, U, `${R}${U}${F}`>
    : never
  : R extends `${U}${infer R2}`
  ? R2 extends `${U}${U}${infer Final}` // remove dubplicate
    ? `${U}${Final}`
    : R2
  : R;

type HasIndexRoute<T extends RouteObject[]> = Extract<T[number], { index: true }> extends never ? false : true;

export type PathPatternParser<T, R extends any[] = []> = T extends {
  path?: string;
  children: infer P extends RouteObject[];
}
  ?
      | (HasIndexRoute<P> extends true ? [...R, T['path']] : never)
      | PathPatternParser<
          P[number],
          T['path'] extends string //
            ? [...R, T['path']]
            : R // for layout routes
        >
  : T extends { path: string }
  ? [...R, T['path']]
  : never;

// https://lihautan.com/extract-parameters-type-from-string-literal-types-with-typescript/#splitting-a-string-literal-type
// type Parts<Path> = Path extends `${infer PartA}/${infer PartB}` ? PartA | Parts<PartB> : Path;
type IsParameter<Part> = Part extends '*'
  ? Part
  : Part extends `:${infer ParamName}?`
  ? ParamName
  : Part extends `:${infer ParamName}`
  ? ParamName
  : never;
type FilteredParts<Path> = Path extends `${infer PartA}/${infer PartB}`
  ? IsParameter<PartA> | FilteredParts<PartB>
  : IsParameter<Path>;

export type Params<Path extends string> = FilteredParts<Path> extends never
  ? never
  : {
      [Key in FilteredParts<Path>]: any;
    };

export type ValidPathsParser<Path> = Path extends `${infer PartA}/${infer PartB}`
  ? `${PartA}/${ValidPathsParser<PartB>}`
  : Path extends `:${string}`
  ? string
  : Path;
