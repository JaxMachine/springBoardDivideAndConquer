function findRotatedIndex(arr, val) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex < rightIndex) {
    let midIndex = Math.floor((rightIndex + leftIndex) / 2);
    if (arr[midIndex] > arr[rightIndex]) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex;
    }
  }
  let pivot = leftIndex;
  leftIndex = 0;
  rightIndex = arr.length - 1;
  if (val >= arr[pivot] && val <= arr[rightIndex]) {
    leftIndex = pivot;
  } else {
    rightIndex = pivot;
  }
  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((rightIndex + leftIndex) / 2);
    if (arr[midIndex] === val) {
      return midIndex;
    } else if (val > arr[midIndex]) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }
  return -1;
}

module.exports = findRotatedIndex;
