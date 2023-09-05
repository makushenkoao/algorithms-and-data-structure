// ITERATION

// function binarySearch(array, item) {
//   if (!item) return null;
//
//   let start = 0,
//     end = array.length - 1;
//
//   while (start <= end) {
//     const middle = (start + end) >> 1;
//     if (array[middle] === item) {
//       return middle;
//     }
//
//     if (item < array[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//   }
//
//
//   return -1;
// }

// RECURSIVE

function binarySearch(array, item, start = 0, end = array.length - 1) {
  if (start > end) return -1;

  const middle = (start + end) >> 1;

  if (array[middle] === item) {
    return middle;
  } else if (item < array[middle]) {
    return binarySearch(array, item, start, middle - 1);
  } else {
    return binarySearch(array, item, middle + 1, end);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));
