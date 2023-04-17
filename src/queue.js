const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.mainQueue = null
  }

  getUnderlyingList() {
    return this.mainQueue
  }

  enqueue(value) {
    let node = new ListNode(value)
    if (!this.mainQueue) this.mainQueue = node
    else {
      if (!this.mainQueue.next) this.mainQueue.next = node
      else {
        let temp = this.mainQueue.next
        while (temp) {
          if (!temp.next) {
            temp.next = node
            return
          }
          temp = temp.next
        }
        temp.next = node
      }
    }
  }

  dequeue() {
    let current = this.mainQueue
    if (this.mainQueue.next) this.mainQueue = this.mainQueue.next
    else this.mainQueue = null
    return current.value
  }
}

module.exports = {
  Queue
};