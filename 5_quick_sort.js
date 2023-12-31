// Суть задачи:
// Данный код реализует алгоритм быстрой сортировки (QuickSort) для сортировки массива чисел.
// Алгоритм QuickSort основывается на принципе "разделяй и властвуй" и работает следующим образом:

// Алгоритм: Быстрая сортировка (QuickSort)

// Сложность алгоритма:
// Средняя и лучшая временная сложность QuickSort составляет O(n log n), где "n" - количество элементов в массиве.
// В худшем случае, если выбор опорного элемента неудачен и приводит к несбалансированным разделениям, сложность может достигать O(n^2)
// но это крайне редкое событие, исключаемое случайным выбором опорного элемента или использованием оптимизаций,
// таких как выбор медианы из трех элементов в качестве опорного.

// Заданный массив чисел, который нужно отсортировать.
const arr = [10, 43, 2, 15, 4, 32, 53, 5, 3, 1, 24, 34, 54];

// Функция для сортировки массива методом QuickSort.
function quickSort(array) {
  // Базовый случай: если массив содержит 1 элемент или пуст, он уже отсортирован.
  if (array.length <= 1) {
    return array;
  }

  // Выбираем индекс опорного элемента (pivot) как середину массива.
  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];

  // Создаем два пустых массива для элементов, меньших и больших опорного элемента.
  let less = [];
  let greater = [];

  // Проходим по всем элементам массива, кроме опорного.
  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) continue;
    // Если элемент меньше опорного, добавляем его в массив "less".
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      // Иначе добавляем его в массив "greater".
      greater.push(array[i]);
    }
  }

  // Рекурсивно применяем алгоритм QuickSort к массивам "less" и "greater",
  // а затем объединяем их с опорным элементом и возвращаем результат.
  return [...quickSort(less), pivot, ...quickSort(greater)];
}

// Выводим отсортированный массив на экран.
console.log(quickSort(arr)); // [1, 2, 3, 4, 5, 10, 15, 24, 32, 34, 43, 53, 54]
