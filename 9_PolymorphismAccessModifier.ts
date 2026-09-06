//Access Modifiers
class Employee
{
    protected Salary=50000;
    protected displaySalary()
{
    console.log("This is from protected method:"+ this.Salary);
}
}
class Dev extends Employee
{
    showSalary():void
    {
        console.log(this.Salary);
        this.displaySalary();
    }

}
const Dev1= new Dev();
Dev1.showSalary();