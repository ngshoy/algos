const { memoize } = require('./memoize');
const { addTiming } = require('./add-timing');

const fib = memoize(n => {
  if (n < 2) {
    return n;
  } else {
    return fib(n - 2) + fib(n - 1);
  }
});

addTiming(fib)(13);
addTiming(fib)(21);
addTiming(fib)(40);
addTiming(fib)(70);
addTiming(fib)(100);
addTiming(fib)(150);
addTiming(fib)(200);
addTiming(fib)(300);
addTiming(fib)(1000);

module.exports = { fib };
