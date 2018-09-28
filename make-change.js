const { memoize } = require('./memoize');
const { addTiming } = require('./add-timing');

const makeChange = memoize((n, bills) => {
    if (n < 0) {
        return 0;
    } else if (n == 0) {
        return 1;
    } else if (bills.length == 0) {
        return 0;
    } else {
        return (
            makeChange(n, bills.slice(1)) + makeChange(n - bills[0], bills)
        );
    }
});

console.log(addTiming(makeChange)(150, [100, 100, 50, 50, 20, 20, 10, 10, 5, 5, 5, 5, 10, 10, 20, 20, 50, 10]));

module.exports = { makeChange };
