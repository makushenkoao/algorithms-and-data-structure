// Граф представлен в виде объекта, где ключи - это вершины, а значения - это списки смежных вершин.
const graphs = {};
graphs.a = ["b", "c"];
graphs.b = ["f"];
graphs.c = ["d", "e"];
graphs.d = ["f"];
graphs.e = ["f"];
graphs.f = ["g"];

// Сложность в худшем случае: O(|V| + |E|), где |V| - количество вершин, |E| - количество рёбер в графе.
// Это потому, что DFS может посетить каждую вершину и ребро ровно один раз.

// Очередной поиск в ширину (Queue BFS).
function queueBreadthSearch(graph, start, end) {
  let queue = [];
  queue.push(start);

  // Используем очередь для BFS
  while (queue.length) {
    const current = queue.shift();

    // Проверяем, существует ли текущая вершина в графе
    if (!graph[current]) {
      graph[current] = [];
    }

    // Если текущая вершина совпадает с целевой, возвращаем true
    if (current === end) {
      return true;
    } else {
      // Добавляем все смежные вершины текущей вершины в очередь для дальнейшего исследования
      queue = [...queue, ...graph[current]];
    }
  }

  // Если путь не найден, возвращаем false
  return false;
}

// Стековый поиск в ширину (Stack BFS).
// Сложность в худшем случае для реализации с использованием матрицы смежности: O(|V|^2), где |V| - количество вершин. Эта оценка сложности возникает при поиске минимального расстояния до всех вершин в графе.
// Сложность в худшем случае для реализации с использованием кучи (приоритетной очереди): O((|V| + |E|) * log|V|),
// где |V| - количество вершин, |E| - количество рёбер.
function stackBreadthSearch(graph, start, end) {
  let stack = [];
  stack.push(start);

  // Используем стек для BFS
  while (stack.length) {
    const current = stack.pop();

    // Проверяем, существует ли текущая вершина в графе
    if (!graph[current]) {
      graph[current] = [];
    }

    // Если текущая вершина совпадает с целевой, возвращаем true
    if (current === end) {
      return true;
    } else {
      // Добавляем все смежные вершины текущей вершины в стек для дальнейшего исследования
      stack = [...stack, ...graph[current]];
    }
  }

  // Если путь не найден, возвращаем false
  return false;
}

// Вызываем функции для поиска пути в графе
console.log(queueBreadthSearch(graphs, "b", "g")); // Ожидаемый результат: true
console.log(stackBreadthSearch(graphs, "b", "g")); // Ожидаемый результат: true
