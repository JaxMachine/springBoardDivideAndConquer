function sortedFrequency(arr, val) {
  topAndBottomIndex = findTopAndBottom(arr, val);
  console.log(topAndBottomIndex);
  if (topAndBottomIndex === -1) {
    return -1;
  }
  return topAndBottomIndex[1] - topAndBottomIndex[0] + 1;
}

function findTopAndBottom(arr, val, lowIndex = 0, highIndex = arr.length - 1) {
  if (highIndex >= lowIndex) {
    if (arr[lowIndex] === val && arr[highIndex] === val) {
      return [lowIndex, highIndex];
    } else if (arr[lowIndex] === val && arr[highIndex] != val) {
      return findTopAndBottom(arr, val, lowIndex, highIndex - 1);
    } else if (arr[lowIndex] != val && arr[highIndex] === val) {
      return findTopAndBottom(arr, val, lowIndex + 1, highIndex);
    }
    return findTopAndBottom(arr, val, lowIndex + 1, highIndex - 1);
  }
  return -1;
}

module.exports = sortedFrequency;
