export const quicksort = arr => {
  if (arr.length < 2) {
    return arr;
  } else {
    const pivot = arr[0];
    const smaller = arr.slice(1).filter(x => x < pivot);
    const greaterEqual = arr.slice(1).filter(x => x >= pivot);
    return [...quicksort(smaller), pivot, ...quicksort(greaterEqual)];
  }
};
