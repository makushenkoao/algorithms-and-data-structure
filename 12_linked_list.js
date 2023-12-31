// Суть задания: реализовать связанный список, структуру данных, в которой элементы связаны друг с другом последовательно, и продемонстрировать его использование.

// Название алгоритма: Связанный список (Linked List).

// Сложность алгоритма:
// Вставка элемента в конец списка (метод add): Временная сложность O(N), где N - текущий размер списка, так как требуется перебор всех узлов для добавления элемента в конец.
// Получение размера списка (метод getSize): Временная сложность O(1), так как размер списка хранится как переменная.
// Вывод всех элементов списка (метод print): Временная сложность O(N), где N - размер списка, так как требуется перебор всех узлов для вывода значений.

// Класс LinkedList представляет собой связанный список.
class LinkedList {
  constructor() {
    this.size = 0; // Инициализируем размер списка как 0.
    this.root = null; // Инициализируем корень списка как null.
  }

  // Метод add(value) добавляет новый узел со значением value в конец списка.
  add(value) {
    if (this.size === 0) {
      this.root = new Node(value); // Если список пуст, создаем корневой узел.
      this.size += 1; // Увеличиваем размер списка на 1.
      return true;
    }
    let node = this.root;
    while (node.next) {
      node = node.next; // Ищем последний узел в списке.
    }
    let newNode = new Node(value);
    node.next = newNode; // Добавляем новый узел после последнего.
    this.size += 1; // Увеличиваем размер списка на 1.
  }

  // Метод getSize() возвращает текущий размер списка.
  getSize() {
    return this.size;
  }

  // Метод print() выводит значения всех узлов списка в консоль.
  print() {
    let result = [];
    let node = this.root;
    while (node) {
      result.push(node.value); // Добавляем значение текущего узла в массив.
      node = node.next; // Переходим к следующему узлу.
    }
    console.log(result);
  }
}

// Класс Node представляет собой узел связанного списка.
class Node {
  constructor(value) {
    this.value = value; // Значение узла.
    this.next = null; // Ссылка на следующий узел.
  }
}

const list = new LinkedList(); // Создаем экземпляр связанного списка.

// Добавляем несколько элементов в список.
list.add(5);
list.add(3);
list.add(2);
list.add(5);
list.add(7);

list.print(); // Выводим значения всех узлов в консоль.
