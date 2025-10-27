let math = [90,34,43,54]
console.log(math);
console.log(math[0]);

// object 

let math_with_std = {student : "hansian",age : 10,marks  : 200}
console.log(math_with_std.marks);

let math_news = {student : "hansian",age : 23,map : "north india new garden"}
console.log(math_news.student);

let newarray = new Array()
newarray[0] = "hasnian"

console.log(newarray);


let arraynew = new Array(6).fill(1)
console.log(arraynew);
let arrayfill = Array.of("hasnian",23,"marks")
console.log(arrayfill);

let close_words = Array.from("hansian", char => char.toUpperCase())
console.log(close_words);

let sparsearray = [1, ,2]
console.log(sparsearray);

// spread opratorr

let spreadoprator = ["plus",...arrayfill]
console.log(spreadoprator);


// arrys are dynamic


// values put

let name_name = ['hansian',"studnet","nizam"]
let [name1,name2,name3] = name_name
console.log(name1,name2,name3);


for (let index = 0; index < name_name.length; index++) {
    const element = name_name[index];
    console.log(element);
    
}


for(let fruits of name_name){
 console.log(fruits);
 
}

let name_name1 = [1,2,3,4,5,6,7];

name_name1.forEach(fruit => {
    if(fruit > 5){        
        console.log(fruit); // sirf number print hoga
    }
});

name_name1.push("hello") // end mein ;push karge yeh isko 

console.log(name_name1);


const shift = name_name1.shift()
console.log("shifyt hua hai 0",shift);
console.log(name_name1);

name_name1.unshift(1) // starting mein add kargewa yeh 
console.log(name_name1);

// map 
let names = ["hasnian","ali"];

let upperNames = names.map(name => name.toUpperCase());

console.log(upperNames);

//multi dimes=nsions array 

let dimensiom = [
    [1,2,3,4], // 0
    [1,2,3,4,] //1
    [1,2,3,4] // 2
]
console.log(dimensiom[0][2]);


// use cases of  this 

// 1️⃣ User Data / Profiles

// Project: Social media app, e-commerce site, ya admin dashboard

let users = [
  {id:1, name:"Ali", age:23},
  {id:2, name:"Sara", age:21},
  {id:3, name:"Zara", age:25}
];

// Filter young users
let youngUsers = users.filter(u => u.age < 25);
console.log(youngUsers); // [{id:2, name:"Sara", age:21}]


// ✅ Use: List of users ko filter karna, search karna, display karna

// 2️⃣ Shopping Cart

// Project: E-commerce website

let cart = [
  {product:"Laptop", price:50000, quantity:1},
  {product:"Mouse", price:500, quantity:2}
];

// Total price calculation
let total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
console.log(total); // 51000


// ✅ Use: Products ko store karna, total calculate karna, checkout me use

// 3️⃣ To-Do List App

// Project: Task manager

let tasks = ["Buy milk", "Study JS", "Clean room"];

// Add new task
tasks.push("Go gym");

// Remove task
tasks.splice(1,1); // removes "Study JS"

// Show all tasks
tasks.forEach(task => console.log(task));


// ✅ Use: Dynamic list, add/remove tasks

// 4️⃣ Chat / Messages

// Project: Messaging app

let messages = [
  {from:"Ali", text:"Hi!"},
  {from:"Sara", text:"Hello!"}
];

// Add new message
messages.push({from:"Zara", text:"Good morning!"});

// Get all message texts
let texts = messages.map(m => m.text);
console.log(texts); // ["Hi!", "Hello!", "Good morning!"]


// ✅ Use: Chat history, display messages, search messages

// 5️⃣ Leaderboard / Scores

// Project: Gaming app

let scores = [
  {name:"Ali", score:50},
  {name:"Sara", score:80},
  {name:"Zara", score:70}
];

// Sort top scores
let leaderboard = scores.sort((a,b) => b.score - a.score);
console.log(leaderboard);


// ✅ Use: Rank players, show top scores

// 6️⃣ API Data / Fetching

// Project: React / Node.js app

// Suppose API returns array of posts
let posts = [
  {id:1, title:"JS Basics"},
  {id:2, title:"React Guide"}
];

// Display titles in UI
posts.map(p => p.title).forEach(title => console.log(title));


// ✅ Use: API response ko store, manipulate aur display karna

// 7️⃣ Search & Filter

// Project: E-commerce / Admin panel

let products = [
  {name:"Laptop", category:"Electronics"},
  {name:"Shirt", category:"Clothes"}
];

// Filter by category
let electronics = products.filter(p => p.category === "Electronics");
console.log(electronics); // [{name:"Laptop", category:"Electronics"}]


// ✅ Use: Search, filter lists, dynamic UI

// 8️⃣ Analytics / Dashboard

// Project: Data visualization

let sales = [100, 200, 150, 300];

// Total sales
let totalSales = sales.reduce((a,b) => a+b, 0);

// Average sales
let avgSales = totalSales / sales.length;
console.log(avgSales); // 187.5
