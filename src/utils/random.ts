// The maximum is inclusive and the minimum is inclusive
export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomOption<T>(arr: T[] | readonly T[]) {
  return arr[getRandomInt(0, arr.length - 1)];
}
