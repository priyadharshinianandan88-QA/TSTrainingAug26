//Q1. Create an object: Tasks: 1. Print complete object, 2. Print only name, 3. Print age
let employee ={name: "Priya", 
    age:35, 
    email: "priya@gmail.com"}

    console.log ("Employee details: "+ employee);
    console.log (employee.name);
    console.log (employee.age);

//Q2. Create browser configuration object with headless and retry mechanism. Print: 1. Browser name, 2. Retry count
let browserConfig={
browser:"Chrome",
headless:true,
retry:3 }
console.log(browserConfig.browser);
console.log(browserConfig.retry);

//Q3. Create company details object with nested model and print company name and city

let company= {name:"ArtTechnology", address: {
                                    state:"Kerala", country:"India"
                                        }
                }
console.log(company.name);
console.log(company.address.state);