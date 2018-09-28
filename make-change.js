const { memoize } = require('./memoize')

const makeChange = (n, bills) => {
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
};

const memoizedMakeChange = memoize((n, bills) => makeChange(n, bills));

module.exports = { makeChange, memoizedMakeChange };
