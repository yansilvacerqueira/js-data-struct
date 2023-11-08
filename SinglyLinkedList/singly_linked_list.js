class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  /**
   * Push Pseudocode
   *
   * This function should accept any kind of value;
   *
   * Create new node with the value passed to the function
   *
   * if there is no head property on the list, set the head and the tail
   * to be the new created node
   *
   * Otherwise set the next property on the tail to be the new node and set the tail property
   * on the list to be the new created node
   *
   * increment the length
   */
  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
  /**
   * Pop Pseudocode
   *
   * if there are no nodes in the list, return undefined;
   *
   * Loop through the list until you reach the tail
   *
   * set the next property of the 2nd to last node to be null
   *
   * set the tail to be the 2nd to last node
   *
   * decrement the length
   *
   * return the value of node
   */
  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // 1 -> 2 -> 3 -> null;
  //           c
  //     newT
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

let list = new SinglyLinkedList();

// console.log(list);

list.push(1);

console.log(list);

list.push(2);

console.log(list);

list.push(3);

console.log(list);
