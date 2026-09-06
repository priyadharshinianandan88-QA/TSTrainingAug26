//push method - add element to the end 
//pop method - remove the last element  
//shift - remove the first element
//unshift - add element to the beginning


let numbers1: number[]=[10,20,30];
numbers1.push(40,50);
console.log(numbers1);

numbers1.pop();
console.log(numbers1);

numbers1.shift();
console.log(numbers1);

numbers1.unshift(0,10);
console.log(numbers1);

//map method 

let num1 = [1,2,3];
let squares = num1.map (num2 => num2 * num2);
console.log (squares);

//map method - with a combination of String and number - Object data type

let users = [
    { name: "Rahul", age: 30 },
    { name: "Amit", age: 25 },
    { name: "Priya", age: 28 }
];

let result = users.map(user => `${user.name} - ${user.age}`);

console.log(result);
