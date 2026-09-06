//Q1.Create a variable called userName using let and store value:John, Print the variable.
 
let userName="John";
console.log(userName);

//Q2.Create a constant variable called baseURL and store: https://testapp.com, Print the value.

const baseURL= "https://testapp.com";
console.log(baseURL);

//Q3. Create a variable: environment="QA", Update it to:UAT, Print final value.

let environment="QA";
environment="UAT";
console.log(environment);

//Q4. Create retry counter: retryCount=2, Increase retry count by 1 and print updated value.
let retryCount=2;
retryCount++;
console.log(retryCount);

//Q5.Create variables: browser="Chrome", headless=true, Print both values.
let browser="Chrome";
let headless=true;
console.log(browser);
console.log(headless);

//Q6. Create execution timeout variable: executionTimeout=30000 Make it constant and try updating:40000
const executionTimeout=30000;
// executionTimeout=40000;

// Error: Cannot assign to const variable

//Q7. Create variables: firstName="John", lastName="Doe", Combine and print full name.
let firstName="John";
let lastName="Doe";
let fullName= firstName+" "+lastName;
console.log(fullName);

//Q8. Create API configuration variables: apiURL="https://api.test.com", statusCode=200, Print values.
let apiURL= "https://api.test.com";
let statusCode=200;
console.log(apiURL);
console.log(statusCode);

//Q9. Create variable: totalTests=100, Create another variable: failedTests=15. Calculate remaining passed tests.
let totalTests=100;
let failedTests=15;
let passedTests= totalTests-failedTests;
console.log(passedTests);

//Q10. Create framework configuration: browser="Chrome", retry=2, timeout=30000
let browser1="Chrome";
let retry=2;
let timeout=30000;
console.log(browser1);
console.log(retry);
console.log(timeout); 
