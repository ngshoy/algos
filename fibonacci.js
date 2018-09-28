import { memoize } from './memoize';

export const fib = n => {
  if (n < 2) {
    return n;
  } else {
    return fib(n - 2) + fib(n - 1);
  }
}

export const memoizedFib = memoize(n => fib(n));
