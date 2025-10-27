// Queue implementation - FIFO
class Queue {
  constructor() {
    this.items = [];
  }

  // Add element to the rear
  enqueue(ele) {
    this.items.push(ele);
    return this.items.length; // return new length
  }

  // Remove element from the front
  dequeue() {
    if(this.isEmpty()) {
      throw new Error("Queue is empty! Cannot dequeue.");
    }
    return this.items.shift();
  }

  // Check first element
  peek() {
    if(this.isEmpty()) {
      throw new Error("Queue is empty! Nothing to peek.");
    }
    return this.items[0];
  }

  // Check if empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Queue size
  size() {
    return this.items.length;
  }

  // Print current queue
  print() {
    console.log(this.items);
  }
}

// Export class
module.exports = Queue;
