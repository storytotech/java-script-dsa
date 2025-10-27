const Stack = require("./stack")

const stack = new Stack(2)

// const push = stack.push("raza")
// const isEmpty = stack.isEmpty()
// const peek = stack.peek()
// console.log(push,isEmpty,peek);

// const size = stack.size()
// console.log(size);


// const push1 = stack.push("raza")
// const isEmpty1 = stack.isEmpty()
// const peek1 = stack.peek()
// console.log(push1,isEmpty1,peek1);

// const size1 = stack.size()
// console.log(size);



// stack overflow bhaiyya
stack.push(1)

stack.print()


const reversedString = stack.reverse("raza")
console.log("Reversed string:", reversedString)

const zarabhai = stack.reverse("zarabhai")
console.log("reverse string ",zarabhai);

const stringNew = stack.reverse("new")
console.log("reverse String new",stringNew);


stack.print()


// use real cases


// 1️⃣ Undo/Redo Feature (Text Editor / IDEs)

// Problem: Text editor me agar user ne kuch type kiya, fir undo ya redo karna ho.

// Solution:

// Stack use hota hai last actions ko store karne ke liye.

// undoStack me latest action push karo.

// Undo karte waqt pop karke action revert karo, aur usko redoStack me push karo.

let undoStack = [];
let redoStack = [];

function typeLetter(letter){
    undoStack.push(letter);
}

function undo(){
    let last = undoStack.pop();
    redoStack.push(last);
    return last;
}

function redo(){
    let last = redoStack.pop();
    undoStack.push(last);
    return last;
}


// ✅ Real Life: VS Code, Word, Google Docs.

// 2️⃣ Expression Evaluation (Arithmetic / Programming Language Interpreters)

// Problem: (2 + 3) * (4 - 1) ko evaluate karna.

// Solution: Stack me operators aur operands ko temporarily store karo.

let operators = [];
let values = [];

function evaluate(expression){
    for(let char of expression){
        if(char === '(') continue;
        else if(char === '+' || char === '-' || char === '*' || char === '/') operators.push(char);
        else if(!isNaN(parseInt(char))) values.push(parseInt(char));
        else if(char === ')'){
            let val2 = values.pop();
            let val1 = values.pop();
            let op = operators.pop();
            if(op === '+') values.push(val1 + val2);
            else if(op === '-') values.push(val1 - val2);
        }
    }
    return values.pop();
}


// ✅ Real Life: Compilers, Calculator apps, Expression parsers.

// 3️⃣ Browser History (Back/Forward Button)

// Problem: Browser me back/forward button ka behavior.

// Solution:

// backStack me user ke previous pages store.

// Back button → pop from backStack, push to forwardStack.

// Forward button → pop from forwardStack, push to backStack.

let backStack = [];
let forwardStack = [];

function visitPage(page){
    backStack.push(page);
    forwardStack = [];
}

function goBack(){
    let last = backStack.pop();
    forwardStack.push(last);
    return backStack[backStack.length-1];
}

function goForward(){
    let next = forwardStack.pop();
    backStack.push(next);
    return next;
}


// ✅ Real Life: Chrome, Firefox, Safari.

// 4️⃣ Syntax Parsing (Parentheses Matching)

// Problem: { [ ( ) ] } jaise brackets balanced hain ya nahi check karna.

// Solution: Stack me opening brackets push karo. Closing aate hi check karo.

function isBalanced(str){
    let stack = [];
    for(let char of str){
        if(char === '(' || char === '{' || char === '[') stack.push(char);
        else {
            let last = stack.pop();
            if((char === ')' && last !== '(') ||
               (char === '}' && last !== '{') ||
               (char === ']' && last !== '[')) return false;
        }
    }
    return stack.length === 0;
}


// ✅ Real Life: IDE syntax checking, Linting tools, Compilers.

// 5️⃣ Function Call Stack (Recursion)

// Problem: Recursive function ka behavior, jaise factorial ya Fibonacci.

// Solution: Har function call stack frame me store hota hai.

// JS me ye automatically hota hai, par conceptually ye Stack hi hai.

function factorial(n){
    if(n === 0) return 1;
    return n * factorial(n-1);
}


// Stack Behavior:

// factorial(3) → push 3

// factorial(2) → push 2

// factorial(1) → push 1

// Then pop and multiply in reverse order.

// ✅ Real Life: Any recursive algorithm.

// 6️⃣ Undo/Redo in Drawing Apps

// Problem: Painting apps me user strokes undo/redo karna chahte hain.

// Solution: Har stroke ek stack element.

// Undo → pop stroke → canvas se remove

// Redo → push stroke back → canvas me draw

// ✅ Real Life: Photoshop, Figma, Illustrator.

// 7️⃣ Web Browsers / DFS Traversal (Tree / Graph)

// Problem: Graph ya Tree traversal (Depth First Search).

// Solution: Recursive DFS ke liye stack use hota hai (explicit ya implicit).

function dfs(graph, start){
    let stack = [start];
    let visited = new Set();

    while(stack.length){
        let node = stack.pop();
        if(!visited.has(node)){
            visited.add(node);
            for(let neighbor of graph[node]){
                stack.push(neighbor);
            }
        }
    }
    return visited;
}


// ✅ Real Life: Pathfinding, AI, Game development.

// 8️⃣ Undo/Redo in Spreadsheets

// Problem: Excel / Google Sheets me cell edits undo karna.

// Solution: Stack me cell updates push karte hain, pop for undo.

// 9️⃣ Stack in Memory Management / CPU

// Problem: Function calls ka local memory track karna.

// Solution: CPU call stack use karta hai to track memory for function execution.

// ✅ Real Life: Operating Systems, Low-level programming.

// 10️⃣ Reverse String / Reverse Words

// Problem: Words ya string reverse karna without built-in functions.

// Solution: Stack me characters push → pop for reverse.

function reverseString(str){
    let stack = [];
    for(let char of str) stack.push(char);
    let reversed = "";
    while(stack.length) reversed += stack.pop();
    return reversed;
}


// ✅ Real Life: Coding interviews, Algorithms.

// 🔹 Summary Table
// Use Case	Stack Role
// Text Editor Undo/Redo	Keep track of actions
// Arithmetic Evaluation	Operators / Operands
// Browser History	Back/Forward navigation
// Syntax Parsing	Bracket / Tag matching
// Recursive Function	Call stack
// Drawing Apps	Stroke undo/redo
// DFS Traversal	Node visit tracking
// Spreadsheet Undo	Cell edits tracking
// CPU / Memory	Function execution context
// Reverse Strings	Temporary storage for LIFO reversal



