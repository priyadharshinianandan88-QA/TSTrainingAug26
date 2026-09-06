interface Employee 
{
    name1=string;
    salary=number;
displayDetails():void
}
class Developer implements Employee
{
    name1:string;
    salary=number;

    constructor (name: string, salary:number)
    {
        this.name1=name;
        this.salary=salary;
    }
}
