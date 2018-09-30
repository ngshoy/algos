const selectionsort = arr => {
  if (arr.length === 0) {
    return [];
  } else {
    const maxElem = Math.max(...arr);
    arr.splice(arr.indexOf(maxElem), 1);
    return Array.from(selectionsort(arr)).concat([maxElem]);
  }
};

module.exports = { selectionsort };
