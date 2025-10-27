class Stack {
    constructor(limits = Infinity){
        this.items = [];
        this.limits = limits;
        this.reversed = []
    }
    push(elements){
        if(this.items.length >= this.limits){
            throw new Error("stack overflow bhaiyya ")
        }
     return  this.items.push(elements);
    }
    pop(){
        if(this.items.length ===0){
          throw new Error("there are no any elemnt in items")
        }
       return this.items.pop();
    }

    peek(){
        if(this.items.length ===0){
            throw new Error("there are any elemnts in items")
        }
        return this.items[this.items.length -1]
    }
   isEmpty(){
    return this.items.length === 0;
   }
   isEmptyr(){
    return this.reversed.length === 0;
   }
size(){
    return this.items.length;
}
print(){
    console.log(this.items);
    console.log(this.reversed);
    
}
reverse(elements) {
    if(typeof elements !== 'string'){
      throw new Error("plz enter a string value if you wanna convert into a reverse this")
    }
   
    // Create a temporary array for reversing
    const tempStack = [];
    
    // Push each character into the temp array
    for(let char of elements){
        tempStack.push(char)
    }
    
    let reverseString = ""; 
    // Pop each character and build the reversed string
    while(tempStack.length > 0){
        reverseString += tempStack.pop()
    }
    
    // Store the reversed string in this.reversed array
    this.reversed.push(reverseString);
    
    return reverseString;
}

}

module.exports = Stack;