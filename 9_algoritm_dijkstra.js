// Суть задания: найти кратчайший путь от начального узла 'a' до конечного узла 'g' в графе,
// где каждое ребро имеет свою стоимость, и выбрать путь с минимальной общей стоимостью.

// Алгоритм Дейкстры используется для нахождения этого пути.

// Сложность алгоритма Дейкстры в данной реализации:
// Временная сложность: O(V^2), где V - количество узлов в графе.
// Пространственная сложность: O(V), где V - количество узлов в графе.

// Объявление графа с указанием связей между узлами и их стоимостями.
const graph = {};
graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

// Функция для нахождения кратчайшего пути в графе.
function shortPath(graph, start, end) {
  const costs = {}; // Хранит стоимость пути от начального узла до каждого узла.
  const processed = []; // Хранит список узлов, которые уже обработаны.
  let neighbors = {}; // Хранит соседей текущего узла, которые ещё не обработаны.

  // Инициализация стоимости пути до всех узлов кроме начального.
  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      let value = graph[start][node];
      costs[node] = value || 100000000; // Установка большой начальной стоимости.
    }
  });

  let node = findNodeLowestCost(costs, processed); // Находим узел с минимальной стоимостью.

  while (node) {
    const cost = costs[node];
    neighbors = graph[node];

    // Обновляем стоимость пути для соседей, если найден более короткий путь.
    Object.keys(neighbors).forEach((neighbor) => {
      let newCost = cost + neighbors[neighbor];
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
      }
    });

    processed.push(node); // Помечаем узел как обработанный.
    node = findNodeLowestCost(costs, processed); // Ищем следующий узел с минимальной стоимостью.
  }

  return costs; // Возвращаем объект с кратчайшими стоимостями пути до всех узлов.
}

// Функция для нахождения узла с минимальной стоимостью из необработанных узлов.
function findNodeLowestCost(costs, processed) {
  let lowestCost = 100000000;
  let lowestNode;

  // Перебираем все узлы и выбираем узел с наименьшей стоимостью.
  Object.keys(costs).forEach((node) => {
    let cost = costs[node];
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  });

  return lowestNode;
}

console.log(shortPath(graph, "a", "g")); // Вызов функции для поиска кратчайшего пути от 'a' до 'g' и вывод результата.
