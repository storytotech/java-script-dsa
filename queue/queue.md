# Queue in JavaScript (FIFO)

Queue is a linear data structure which follows **FIFO (First In First Out)** principle.  
Elements are added at the **rear** and removed from the **front**.

---

## **Queue Class Methods**

| Method     | Description                                    |
|------------|-----------------------------------------------|
| `enqueue(x)` | Adds element `x` at the rear of queue       |
| `dequeue()`  | Removes element from front of queue         |
| `peek()`     | Returns front element without removing it  |
| `isEmpty()`  | Checks if queue is empty                    |
| `size()`     | Returns number of elements in queue        |
| `print()`    | Prints the queue elements                   |

---

## **Example**

```javascript
const Queue = require('./queue');
const q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q.dequeue()); // 1
console.log(q.peek());    // 2
q.print();                // [2, 3]
console.log(q.isEmpty()); // false
console.log(q.size());    // 2


---

## **3️⃣ 20 Queue Problems Markdown (Small, Medium, High)**

```markdown
# 20 Queue Problems

### Small
1. Implement basic `enqueue` & `dequeue`.
2. Peek front element.
3. Check if queue is empty.
4. Get queue size.
5. Print all elements.
6. Reverse a queue using another queue.
7. Count occurrences of a number in queue.
8. Sum of all elements in queue.
9. Remove all even numbers.
10. Rotate queue by `k` positions.

### Medium
11. Implement queue using two stacks.
12. Implement circular queue.
13. Implement priority queue.
14. Check if given sequence of brackets is balanced using queue.
15. Merge two queues alternately.
16. Implement double-ended queue (deque).
17. Sliding window maximum problem.
18. First non-repeating character in a stream.
19. Implement queue using linked list.
20. Generate binary numbers from 1 to N using queue.

### High
21. LRU Cache implementation using queue + map.
22. BFS shortest path in a graph.
23. Task scheduling with priorities.
24. Interleaving of first half and second half of a queue.
25. Rotten oranges problem (matrix BFS).
26. Implement a deque with circular array.
27. Sliding window minimum/maximum problem.
28. Implement a queue which supports `max()` in O(1).
29. Minimum cost to connect ropes using queue.
30. Implement a thread-safe queue (synchronization problem).

> Queues are widely used in **web servers, OS process scheduling, BFS in graphs, and real-world applications** where order matters. FIFO is the key principle.

