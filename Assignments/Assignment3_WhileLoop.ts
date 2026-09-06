//Q1. Reverse a Number using while . 
let number = 123456;
let rev=0;
while (number!==0)
{
    let digit=0;
    digit=number%10;
    rev=rev*10 + digit;
    number=Math.floor(number/10);
}
console.log ("The reversal number is ", rev);

//Q2. Count frequency of digits in a number 

let num: number = 11223344;
let frequency: {[key:number]:number} = {};
while (num !== 0) {
let digit = num % 10;

frequency[digit] =
(frequency[digit] || 0) + 1;
num = Math.floor(num / 10);
}
for (let key in frequency) {
console.log(
`${key} = ${frequency[key]}`
);
}