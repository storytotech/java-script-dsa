const Queue = require("./queue")
const queue = new Queue()

const q= queue.enqueue(2)
console.log(q);

const d = queue.dequeue()
console.log(d);

queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(4)
queue.print()
const deq = queue.dequeue()
console.log(deq);


