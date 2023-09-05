// O(n * log n)
function quickSort(unsortedArray) {
  if (unsortedArray.length < 2) {
    return unsortedArray;
  }

  const middle = unsortedArray.length >> 1;
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  return merge(quickSort(left), quickSort(right));
}

function merge(left, right) {
  const resultArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

console.log(
  quickSort([3, 1, 34, 6, 2, 4, 6, 2, 34, 23, 4, 634, 6, 23, 56, 34, 6]),
);
