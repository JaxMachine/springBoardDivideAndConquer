function countZeroes(arr) {
  breakIndex = findBreakIndex(arr);
  if (breakIndex === -1) {
    return 0;
  }
  return arr.length - breakIndex;
}

function findBreakIndex(arr, lowIndex = 0, highIndex = arr.length - 1) {
  if (highIndex >= lowIndex) {
    let midIndex = Math.floor((lowIndex + highIndex) / 2);
    if (midIndex === 0 || (arr[midIndex] === 0 && arr[midIndex - 1] === 1)) {
      return midIndex;
    } else if (arr[midIndex] === 1) {
      return findBreakIndex(arr, midIndex + 1, highIndex);
    }
    return findBreakIndex(arr, lowIndex, midIndex - 1);
  }
  return -1;
}

module.exports = countZeroes;
