class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(values = []) {
    this.head = null;

    for (let value of values) {
      this.insertLast(value);
    }
  }

  clear() {
    this.head = null;
  }

  display() {
    // console.log("LinkedList Started")
    if (this.head == null) {
      console.log(" No Data")
    } else {

      let start = this.head;
      while (start) {
        process.stdout.write(start.data.toString())
        process.stdout.write(",")
        // console.log(start.data);
        start = start.next;
      }
    }
    // console.log("LinkedList Ended")
    console.log()
  }


  concat(list) {

    let node = this.head;
    let prev = null;

    while (node) {
      // sum += node.data;
      // counter++;
      prev = node;
      node = node.next;
    }
    prev.next = list.head;
    // let newHead = list.head;
    // while (newHead) {
    //   // sum += node.data;
    //   // counter++;
    //   prev.next = node;
    //   newHead = newHead.next;
    // }
    // console.log("node", this.head)


  }


  loopCheck() {


    let node = this.head;
    let p = node;
    let q = node;
    let flag = false;
    while (node && p && q) {
      p = node.next;
      q = node.next.next;

      if (p === q) {
        flag = true;
      }
      node = node.next;
    }
    return flag;
  }

  merging(list) {

    let first = this.head;
    let second = list.head;

    let third = null;
    let last = null;

    while (first && second) {
      if (first.data < second.data) {
        if (!third) {
          third = first;
          last = first;
          first = first.next;
        } else {
          last.next = first;
          last = first;
          first = first.next;
        }
      } else {
        if (!third) {
          third = second;
          last = second;
          second = second.next;
        } else {
          last.next = second;
          last = second;
          second = second.next;
        }
      }
    }

    while (first) {
      last.next = first;
      last = first;
      first = first.next;
    }

    while (second) {
      last.next = second;
      last = second;
      second = second.next;
    }
    this.head = third;
    // console.log(this.head)
    // let newHead = list.head;
    // while (newHead) {
    //   // sum += node.data;
    //   // counter++;
    //   prev.next = node;
    //   newHead = newHead.next;
    // }
    // console.log("node", this.head)


  }

  size() {
    let counter = 0;
    let sum = 0;
    let node = this.head;

    while (node) {
      sum += node.data;
      counter++;
      node = node.next;
    }

    return { "counter": counter, "sum": sum };
  }

  getMax() {

    let max = 0;
    let node = this.head;

    while (node) {
      if (max < node.data) {
        max = node.data
      }
      node = node.next;
    }

    return max;
  }

  getAt(index) {
    if (!this.head) {
      return null;
    }

    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      node = node.next;
      counter++;
    }
    return null;
  }


  removeDuplicates() {
    let node = this.head;
    let prev = null;
    while (node) {
      if (prev !== null && prev.data == node.data) {

        prev.next = node.next;
      }
      prev = node;
      node = node.next;
    }


  }


  reverse() {


    let p = null;
    let q = null;
    let r = null;

    p = this.head;
    while (p) {
      r = q;
      q = p;
      p = p.next;
      q.next = r;

    }
    this.head = q;

  }


  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    let counter = 1;
    let previous = this.head;
    let node = this.head.next;
    while (node) {
      if (counter === index) {
        previous.next = new Node(data, node);
        return;
      }
      previous = node;
      node = node.next;
      counter++;
    }

    previous.next = new Node(data, node);
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index - 1) {
        if (node.next) {
          return (node.next = node.next.next);
        } else {
          return (node.next = null);
        }
      }
      node = node.next;
      counter++;
    }
  }

  getFirst() {
    return this.head;
  }

  insertFirst(data) {
    this.head = new Node(data, this.getFirst());
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node.next) {
      node = node.next;
    }

    return node;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      last.next = new Node(data);
      return last.next;
    } else {
      this.head = new Node(data);
      return this.head;
    }
  }

  forEach(fn) {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
