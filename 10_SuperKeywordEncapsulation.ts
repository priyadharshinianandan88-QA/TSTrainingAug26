//Encapsulation - 
class Employee
{
    private salary: number;
    constructor (salary:number)
    {
        this.salary=salary;
    }
getsalary()
{
    console.log(this.salary);
}
setsalary(salary:number)
{
    this.salary=salary;
}
}
const emp=new Employee(50000);
emp.getsalary();
emp.setsalary(60000);
emp.getsalary();

//ENCAPSULATION
//keep your data and methods secured and it would allow access in a controlled manner
//ATM - your bank balance is private, you cannot directly change the balance
//methods like withdraw(), deposit()
/* class Employee
{
    private salary: number; //private
    constructor(salary: number)
    {
        this.salary = salary;
    }
    getSalary() //getter  methods
    {
        console.log(this.salary);
    }
    setsalary(salary: number) //setter methods
    {
        this.salary = salary;
    }
}
const emp = new Employee(50000);
emp.getSalary();
emp.setsalary(60000);
emp.getSalary(); */