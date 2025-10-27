# Stack Data Structure and Its Real-World Use Cases

## Stack Class Example

```js
class Stack {
    constructor(limits = Infinity){
        this.items = [];
        this.limits = limits;
        this.reversed = [];
    }

    push(elements){
        if(this.items.length >= this.limits){
            throw new Error("Stack Overflow 😅");
        }
        return this.items.push(elements);
    }

    pop(){
        if(this.items.length === 0){
            throw new Error("No elements in stack");
        }
        return this.items.pop();
    }

    peek(){
        if(this.items.length === 0){
            throw new Error("No elements in stack");
        }
        return this.items[this.items.length - 1];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items);
        console.log(this.reversed);
    }

    reverse(elements){
        if(typeof elements !== 'string'){
            throw new Error("Please enter a string value to reverse");
        }
        this.reversed = [];
        for(let char of elements){
            this.reversed.push(char);
        }
        let reverseString = "";
        while(this.reversed.length){
            reverseString += this.reversed.pop();
        }
        this.reversed = [reverseString];
        return this.reversed;
    }
}

module.exports = Stack;
```

---

## Example Usage

```js
const Stack = require("./stack");
const stack = new Stack(2);

stack.push(1);
stack.print();

console.log(stack.reverse("raza")); // ["azar"]
console.log(stack.reverse("zarabhai")); // ["iahbaraz"]
console.log(stack.reverse("new")); // ["wen"]
stack.print();
```

---

## Real-World Use Cases of Stack

### 1️⃣ Undo/Redo Feature (Text Editor / IDEs)

* **Role:** Keep track of last actions for undo/redo.
* **Example:** VS Code, Word, Google Docs.

```js
let undoStack = [], redoStack = [];
function typeLetter(letter){ undoStack.push(letter); }
function undo(){ let last = undoStack.pop(); redoStack.push(last); return last; }
function redo(){ let last = redoStack.pop(); undoStack.push(last); return last; }
```

### 2️⃣ Expression Evaluation (Arithmetic / Programming Language Interpreters)

* **Role:** Temporary store for operators and operands.
* **Example:** Compilers, calculators.

```js
let operators = [], values = [];
function evaluate(expression){ /* ... */ }
```

### 3️⃣ Browser History (Back/Forward Button)

* **Role:** Track pages visited for back/forward navigation.
* **Example:** Chrome, Firefox.

```js
let backStack = [], forwardStack = [];
function visitPage(page){ backStack.push(page); forwardStack = []; }
```

### 4️⃣ Syntax Parsing (Parentheses Matching)

* **Role:** Check balanced brackets.
* **Example:** IDE syntax checking, compilers.

```js
function isBalanced(str){ /* ... */ }
```

### 5️⃣ Function Call Stack (Recursion)

* **Role:** Track function calls and execution context.
* **Example:** Any recursive algorithm.

```js
function factorial(n){ if(n === 0) return 1; return n * factorial(n-1); }
```

### 6️⃣ Undo/Redo in Drawing Apps

* **Role:** Each stroke stored in stack; undo/redo manipulates strokes.
* **Example:** Photoshop, Figma.

### 7️⃣ Web Browsers / DFS Traversal (Tree / Graph)

* **Role:** Track nodes visited during DFS.
* **Example:** Pathfinding, AI, game development.

```js
function dfs(graph, start){ /* ... */ }
```

### 8️⃣ Undo/Redo in Spreadsheets

* **Role:** Track cell edits for undo.
* **Example:** Excel, Google Sheets.

### 9️⃣ Stack in Memory Management / CPU

* **Role:** Track function execution and local memory.
* **Example:** Operating Systems, low-level programming.

### 🔟 Reverse String / Words

* **Role:** Temporarily store characters for LIFO reversal.
* **Example:** Coding interviews, algorithms.

```js
function reverseString(str){ let stack = []; for(let char of str) stack.push(char); let reversed = ""; while(stack.length) reversed += stack.pop(); return reversed; }
```

---

### Summary Table

| Use Case              | Stack Role                          |
| --------------------- | ----------------------------------- |
| Text Editor Undo/Redo | Keep track of actions               |
| Arithmetic Evaluation | Operators / Operands                |
| Browser History       | Back/Forward navigation             |
| Syntax Parsing        | Bracket / Tag matching              |
| Recursive Function    | Call stack                          |
| Drawing Apps          | Stroke undo/redo                    |
| DFS Traversal         | Node visit tracking                 |
| Spreadsheet Undo      | Cell edits tracking                 |
| CPU / Memory          | Function execution context          |
| Reverse Strings       | Temporary storage for LIFO reversal |


# Stack Problems – Small, Medium, and High Difficulty

## Small Problems

1. **Push and Pop** – Implement a basic stack and push/pop elements.
2. **Peek Top Element** – Write a function to return the top element.
3. **Check Empty** – Write a function that returns true if stack is empty.
4. **Stack Size** – Function to return the current number of elements.
5. **Reverse String** – Use a stack to reverse a given string.
6. **Palindrome Check** – Check if a string is a palindrome using stack.
7. **Stack from Array** – Convert an array to a stack.
8. **Print Stack** – Print all elements of the stack.
9. **Duplicate Top Element** – Duplicate the top element of the stack.
10. **Clear Stack** – Empty all elements from the stack.

## Medium Problems

11. **Balanced Parentheses** – Check if parentheses/brackets are balanced.
12. **Evaluate Postfix Expression** – Calculate result from a postfix expression.
13. **Sort Stack** – Sort elements in ascending order using only stack operations.
14. **Next Greater Element** – For each element, find next greater element using stack.
15. **Largest Rectangle in Histogram** – Compute largest rectangle area.
16. **Min Stack** – Implement stack with push, pop, and getMin in O(1).
17. **Duplicate Parentheses Detection** – Detect duplicate parentheses in expression.
18. **Infix to Postfix Conversion** – Convert infix expression to postfix using stack.
19. **Reverse Stack** – Reverse elements of a stack using recursion.
20. **Sort Stack Recursively** – Sort a stack recursively without using extra data structures.

## High Difficulty Problems

21. **Largest Rectangle in Matrix** – Use stack to find largest rectangle of 1’s in a 2D binary matrix.
22. **Max Area Under Skyline** – Compute max area under histogram efficiently.
23. **Celebrity Problem** – Find a celebrity in a party using stack.
24. **Stock Span Problem** – Calculate stock span values for n days.
25. **Trapping Rain Water** – Calculate water trapped between bars using stack.
26. **Remove K Digits** – Remove k digits from number to make smallest possible.
27. **Sliding Window Maximum** – Find max in every sliding window of size k.
28. **Longest Valid Parentheses** – Find length of longest valid parentheses substring.
29. **Expression Tree Construction** – Build expression tree from postfix expression.
30. **Decode String** – Decode string with nested counts e.g., "3[a2[bc]]" → "abcbcabcbcabcbc".

---

### Notes:

* Problems 1–10 are **Small** and beginner-friendly.
* Problems 11–20 are **Medium**, require intermediate stack knowledge.
* Problems 21–30 are **High**, require algorithmic thinking and real-world applications.

### Suggested Approach

1. Understand **push**, **pop**, and **peek** thoroughly.
2. Solve small problems first to strengthen basics.
3. Move to medium problems for algorithmic applications.
4. Attempt high difficulty problems for interview-level skills.

---

