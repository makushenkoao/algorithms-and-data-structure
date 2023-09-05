// Быстрая сортировка. Сложность данного алгоритма O(n * log n)

// Заданный массив для сортировки
const arr = [10, 43, 2, 15, 4, 32, 53, 5, 3, 1, 24, 34, 54];

// Функция quickSort выполняет быструю сортировку для массива unsortedArray.
function quickSort(unsortedArray) {
  // Если массив содержит меньше двух элементов, он считается отсортированным и возвращается без изменений
  if (unsortedArray.length < 2) {
    return unsortedArray;
  }

  // Находим средний индекс массива
  const middle = unsortedArray.length >> 1;

  // Разбиваем массив на два подмассива: левый и правый
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Рекурсивно сортируем левый и правый подмассивы и объединяем их
  return merge(quickSort(left), quickSort(right));
}

// Функция merge объединяет два отсортированных подмассива в один отсортированный массив.
function merge(left, right) {
  const resultArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Сравниваем элементы из левого и правого подмассивов и добавляем их в результат в порядке возрастания
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Если один из подмассивов закончился раньше другого, добавляем оставшиеся элементы в результат
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

// Вызываем функцию quickSort для сортировки массива и выводим результат в консоль
console.log(quickSort(arr)); // [1, 2, 3, 4, 5, 10, 15, 24, 32, 34, 43, 53, 54]
