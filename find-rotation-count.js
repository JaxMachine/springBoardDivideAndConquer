function findRotationCount(arr) {
  let lowIndex = 0;
  let highIndex = arr.length - 1;

  while (highIndex > lowIndex) {
    let midIndex = Math.floor((lowIndex + highIndex) / 2);
    if (midIndex < highIndex && arr[midIndex + 1] < arr[midIndex]) {
      return midIndex + 1;
    }
    if (midIndex > lowIndex && arr[midIndex - 1] > arr[midIndex]) {
      return midIndex;
    }
    if (arr[highIndex] > arr[midIndex]) {
      highIndex = midIndex - 1;
    } else {
      lowIndex = midIndex + 1;
    }
  }
  return 0;
}

module.exports = findRotationCount;
