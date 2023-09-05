// Линейный алгоритм.
// Сложность данного алгоритма O(n)

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (item === array[i]) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 0));
