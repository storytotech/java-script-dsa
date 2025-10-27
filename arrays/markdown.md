# JavaScript Arrays - Complete Guide with Examples

This markdown file explains all aspects of arrays in JavaScript with examples and real-world use cases.

---

## 1. Basic Arrays

```javascript
let math = [90, 34, 43, 54];
console.log(math);       // Print the entire array
console.log(math[0]);    // Access first element (90)
```

**Explanation:**

* Arrays store multiple values.
* Access elements using their index starting from 0.

---

## 2. Objects (Key-Value Pairs)

```javascript
let math_with_std = {student : "hansian", age : 10, marks  : 200};
console.log(math_with_std.marks);  // 200

let math_news = {student : "hansian", age : 23, map : "north india new garden"};
console.log(math_news.student);    // "hansian"
```

**Explanation:**

* Objects store data as key-value pairs.
* Access using `object.key` notation.

---

## 3. Array Creation Methods

```javascript
let newarray = new Array();
newarray[0] = "hasnian";
console.log(newarray);

let arraynew = new Array(6).fill(1);
console.log(arraynew);  // [1, 1, 1, 1, 1, 1]

let arrayfill = Array.of("hasnian", 23, "marks");
console.log(arrayfill); // ["hasnian", 23, "marks"]

let close_words = Array.from("hansian", char => char.toUpperCase());
console.log(close_words); // ["H", "A", "N", "S", "I", "A", "N"]

let sparsearray = [1, , 2];
console.log(sparsearray); // [1, empty, 2]
```

**Explanation:**

* `new Array()` creates empty arrays.
* `Array.of()` creates arrays with the exact elements.
* `Array.from()` converts iterable objects like strings into arrays.
* Sparse arrays can have empty slots.

---

## 4. Spread Operator

```javascript
let spreadoprator = ["plus", ...arrayfill];
console.log(spreadoprator); // ["plus", "hasnian", 23, "marks"]
```

**Explanation:**

* `...` spreads array elements into a new array.
* Useful for combining arrays.

---

## 5. Destructuring

```javascript
let name_name = ['hansian', "student", "nizam"];
let [name1, name2, name3] = name_name;
console.log(name1, name2, name3); // "hansian student nizam"
```

**Explanation:**

* Array destructuring assigns elements to variables.

---

## 6. Iterating Arrays

```javascript
for (let index = 0; index < name_name.length; index++) {
    console.log(name_name[index]);
}

for(let fruit of name_name){
    console.log(fruit);
}

let name_name1 = [1,2,3,4,5,6,7];
name_name1.forEach(fruit => {
    if(fruit > 5){
        console.log(fruit); // prints only numbers > 5
    }
});
```

**Explanation:**

* `for`, `for...of`, and `forEach` are ways to iterate arrays.
* `forEach` executes a function on each element.

---

## 7. Adding & Removing Elements

```javascript
name_name1.push("hello"); // Add to end
console.log(name_name1);

const shift = name_name1.shift(); // Remove from start
console.log("shifted element:", shift);
console.log(name_name1);

name_name1.unshift(1); // Add to start
console.log(name_name1);
```

**Explanation:**

* `push()` adds at the end.
* `pop()` removes from the end.
* `shift()` removes from the start.
* `unshift()` adds at the start.

---

## 8. Map Method

```javascript
let names = ["hasnian", "ali"];
let upperNames = names.map(name => name.toUpperCase());
console.log(upperNames); // ["HASNIA", "ALI"]
```

**Explanation:**

* `map()` transforms each element and returns a new array.

---

## 9. Multi-Dimensional Arrays

```javascript
let dimension = [
    [1,2,3,4], // 0
    [1,2,3,4], // 1
    [1,2,3,4]  // 2
];
console.log(dimension[0][2]); // 3
```

**Explanation:**

* Arrays inside arrays form matrices.
* Access using `[row][column]` notation.

---

## 10. Real-World Project Use Cases

### a) User Data / Profiles

```javascript
let users = [
  {id:1, name:"Ali", age:23},
  {id:2, name:"Sara", age:21},
  {id:3, name:"Zara", age:25}
];
let youngUsers = users.filter(u => u.age < 25);
console.log(youngUsers); // Filter users under 25
```

### b) Shopping Cart

```javascript
let cart = [
  {product:"Laptop", price:50000, quantity:1},
  {product:"Mouse", price:500, quantity:2}
];
let total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
console.log(total); // 51000
```

### c) To-Do List App

```javascript
let tasks = ["Buy milk", "Study JS", "Clean room"];
tasks.push("Go gym");
tasks.splice(1,1); // remove "Study JS"
tasks.forEach(task => console.log(task));
```

### d) Chat / Messages

```javascript
let messages = [
  {from:"Ali", text:"Hi!"},
  {from:"Sara", text:"Hello!"}
];
messages.push({from:"Zara", text:"Good morning!"});
let texts = messages.map(m => m.text);
console.log(texts);
```

### e) Leaderboard / Scores

```javascript
let scores = [
  {name:"Ali", score:50},
  {name:"Sara", score:80},
  {name:"Zara", score:70}
];
let leaderboard = scores.sort((a,b) => b.score - a.score);
console.log(leaderboard);
```

### f) API Data / Fetching

```javascript
let posts = [
  {id:1, title:"JS Basics"},
  {id:2, title:"React Guide"}
];
posts.map(p => p.title).forEach(title => console.log(title));
```

### g) Search & Filter

```javascript
let products = [
  {name:"Laptop", category:"Electronics"},
  {name:"Shirt", category:"Clothes"}
];
let electronics = products.filter(p => p.category === "Electronics");
console.log(electronics);
```

### h) Analytics / Dashboard

```javascript
let sales = [100, 200, 150, 300];
let totalSales = sales.reduce((a,b) => a+b, 0);
let avgSales = totalSales / sales.length;
console.log(avgSales); // 187.5
```

---

**Summary:**

* Arrays store multiple values and are dynamic.
* Use methods like `push`, `pop`, `shift`, `unshift`, `splice`, `map`, `filter`, `reduce`.
* Arrays are essential in real projects like e-commerce, social apps, task management, chat, leaderboards, and dashboards.

---

# JavaScript Arrays - Practice Problems

## **Small / Easy (1-7)**
1. Create an array of 5 numbers and print the first and last element.
2. Create an array of fruits and print all the fruits using a `for` loop.
3. Add a new element at the end of an array using `push()`.
4. Remove the first element of an array using `shift()`.
5. Combine two arrays using the spread operator.
6. Convert the string `"hello"` into an array of characters.
7. Create an array using `Array.of()` containing 3 strings and print it.

---

## **Medium (8-14)**
8. Create an array of numbers and calculate the sum using `reduce()`.
9. Given an array `[1,2,3,4,5]`, create a new array where each element is multiplied by 2 using `map()`.
10. Filter an array of numbers to get only even numbers.
11. Create a multi-dimensional array `3x3` and print the element at row 2, column 3.
12. Sort an array of numbers in descending order.
13. Find the index of the number `50` in an array `[10, 20, 50, 70]`.
14. Remove 2 elements starting from index 1 using `splice()`.

---

## **High / Challenging (15-20)**
15. Given an array of objects `[{name: "Ali", age: 23}, {name: "Sara", age: 21}]`, create an array of names only using `map()`.
16. Create an array of numbers and find the average.
17. From an array of products `[ {name: "Laptop", price:500}, {name:"Shirt", price:200} ]`, filter all products with price > 300.
18. Flatten a multi-dimensional array `[[1,2],[3,4],[5,6]]` into a single array.
19. Remove duplicates from an array `[1,2,2,3,3,4]`.
20. Given a 2D array representing seats in a cinema, mark seat `"B2"` as booked by replacing its value with `"Booked"`.

---

**Tips:**  
- Use array methods like `push`, `pop`, `shift`, `unshift`, `map`, `filter`, `reduce`, `splice`, `sort`.  
- Practice both **1D and 2D arrays**.  
- Try to solve without looking at the answers first.  
