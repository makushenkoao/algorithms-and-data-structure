// Рекурсивный расчет факториала. Сложность данного алгоритма: O(n)

// Функция factorial рассчитывает факториал числа n с использованием рекурсии.
function factorial(n) {
  // Базовый случай: если n равно 1, возвращаем 1
  // Рекурсивный случай: умножаем n на факториал (n-1)
  return n === 1 ? 1 : n * factorial(n - 1);
}

// Рекурсивное вычисление чисел Фибоначчи. Сложность данного алгоритма: O(2^n) - экспоненциальная сложность

// Функция fibonachi вычисляет n-ное число Фибоначчи с использованием рекурсии.
function fibonachi(n) {
  // Базовые случаи: первые два числа Фибоначчи равны 1
  // Рекурсивный случай: сумма двух предыдущих чисел Фибоначчи
  return n === 1 || n === 2 ? 1 : fibonachi(n - 1) + fibonachi(n - 2);
}

// Вызываем функцию factorial для расчета факториала числа 5 и выводим результат в консоль
console.log(factorial(5)); // Ответ: 120
// Вызываем функцию fibonachi для вычисления 8-го числа Фибоначчи и выводим результат в консоль
console.log(fibonachi(8)); // Ответ: 21
