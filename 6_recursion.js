function factorial(n) {
  return n === 1 ? 1 : n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// 1,1,2,3,5,8,14,21 - fibonachi

function fibonachi(n) {
  return n === 1 || n === 2 ? 1 : fibonachi(n - 1) + fibonachi(n - 2);
}

console.log(fibonachi(8)); // 21
