const memoize = fn => {
    let cache = {};
    return (...args) => {
        let strX = JSON.stringify(args);
        return strX in cache ? cache[strX] : (cache[strX] = fn(...args));
    };
};

const memoizeUnary = fn => {
    let cache = {};
    return x => (x in cache ? cache[x] : (cache[x] = fn(x)));
};

module.exports = { memoize, memoizeUnary };
