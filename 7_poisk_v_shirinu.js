// Граф - это некая абстрактная структура данных
// представляющая собой множества вершит и набор ребер

// найти короткий путь от точки А до точки Б

const graphs = {};
graphs.a = ["b", "c"];
graphs.b = ["f"];
graphs.c = ["d", "e"];
graphs.d = ["f"];
graphs.e = ["f"];
graphs.f = ["g"];

// QUEUE

// function breadthSearch(graph, start, end) {
//   let queue = [];
//   queue.push(start);
//
//   while (queue.length) {
//     const current = queue.shift();
//
//     if (!graph[current]) {
//       graph[current] = [];
//     }
//
//     if (graph[current].includes(end)) {
//       return true;
//     } else {
//       queue = [...queue, ...graph[current]];
//     }
//   }
//
//   return false;
// }

// STACK

function breadthSearch(graph, start, end) {
  let stack = [];
  stack.push(start);

  while (stack.length) {
    const current = stack.pop();

    if (!graph[current]) {
      graph[current] = [];
    }

    if (graph[current].includes(end)) {
      return true;
    } else {
      stack = [...stack, ...graph[current]];
    }
  }

  return false;
}

// RECURSIVE

console.log(breadthSearch(graphs, "b", "s"));
