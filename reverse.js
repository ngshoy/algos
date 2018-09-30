const reverse = (oldArr, newArr = []) => {
  if (oldArr.length === 0) {
    return newArr;
  } else {
    newArr.push(oldArr.pop());
    return reverse(oldArr, newArr);
  }
};

module.exports = { reverse };
