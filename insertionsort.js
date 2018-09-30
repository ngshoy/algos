const insertionsort = arr => {
  if (arr.length === 1) {
    return arr;
  } else {
    const firstElem = arr.shift();
    const sortedArr = insertionsort(arr);
    const index = sortedArr.reduce((acc, elem) => {
      if (firstElem > elem) {
        acc = sortedArr.lastIndexOf(elem) + 1;
      }
      return acc;
    }, 0);
    arr.splice(index, 0, firstElem);
    return arr;
  }
};

module.exports = { insertionsort };
