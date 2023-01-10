export interface LoggerOptions {
  color?: string;
  css?: string;
}

const prefixWithColor: (keyof Console)[] = ['log', 'groupCollapsed'];
const prefixFn: (keyof Console)[] = [...prefixWithColor, 'info', 'warn', 'error'];

const colors = ['54478c', '2c699a', '048ba8', '0db39e', '16db93', '83e377', 'b9e769', 'efea5a', 'f1c453', 'f29e4c'];

let count = -1;

const getColor = () => {
  const next = count + 1;
  const color = '#' + colors[next];
  count = next === colors.length - 1 ? -1 : next;
  return color;
};

export interface Logger extends Console {
  prefix: string;
}

export class Logger {
  static create = (...args: ConstructorParameters<typeof Logger>) => new Logger(...args);

  constructor(prefix = '', protected options: LoggerOptions = {}) {
    let { color = getColor(), css } = options;

    prefix = prefix && `[${prefix}]`;
    color = color && `color: ${color}; font-weight: bold;`;
    css = (css || color) && `${css || ''} ${color || ''}`.trim();

    for (const [_key, value] of Object.entries(console)) {
      const key = _key as keyof Console;
      // eslint-disable-next-line
      const isFunction = typeof console[key] === 'function';
      const disable = process.env.DISABLE_LOGGER === 'true';

      switch (true) {
        case isFunction && disable:
          this[key] = (() => void 0) as any;
          break;
        case isFunction && css && prefixWithColor.includes(key):
          this[key] = value.bind(console, `%c${prefix}`, css);
          break;
        case isFunction && prefixFn.includes(key):
          this[key] = value.bind(console, prefix);
          break;
        default:
          this[key] = value;
      }
    }
  }
}

export const logger = new Logger();
