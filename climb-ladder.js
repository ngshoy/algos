const { memoize } = require('./memoize');
const { addTiming } = require('./add-timing');

const climbLadder = memoize(steps => {
  if (steps <= 2) {
    return steps;
  } else {
    return climbLadder(steps - 1) + climbLadder(steps - 2);
  }
});

addTiming(climbLadder)(20);
addTiming(climbLadder)(30);
addTiming(climbLadder)(40);
addTiming(climbLadder)(45);
addTiming(climbLadder)(50);
addTiming(climbLadder)(100);

module.exports = { climbLadder };
