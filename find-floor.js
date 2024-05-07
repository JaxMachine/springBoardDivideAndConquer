function findFloor(arr, val) {
  let lowIndex = 0;
  let highIndex = arr.length - 1;

  while (highIndex > lowIndex) {
    let midIndex = Math.floor((highIndex + lowIndex) / 2);
    if (val >= arr[highIndex]) {
      return arr[highIndex];
    }
    if (arr[midIndex] === val) {
      return arr[midIndex];
    }
    if (midIndex > 0 && arr[midIndex - 1] <= val && val < arr[midIndex]) {
      return arr[midIndex - 1];
    } else if (arr[midIndex] > val) {
      highIndex = midIndex - 1;
    } else {
      lowIndex = midIndex + 1;
    }
  }
  return -1;
}

//module.exports = findFloor;
