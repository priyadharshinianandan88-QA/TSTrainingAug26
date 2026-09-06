//Inheritance - Parent is inherited by Child - so it can reuse the code from Parent class
class vehicle
{
    start()
    {
        console.log("vehicle started");
    }

}
class Car extends vehicle
{
    drive()
    {console.log("Drive the car");

    }
}
let c1=new Car();
c1.drive();
c1.start();

//hierarchial inheritance - Parent class is inherited by the Child class, and another child class inherits the parent class

class Grandparent 
{
    grandparentMethod()
    {
        console.log("This is from grandparent Method");
        
    }
} 
class Parent extends Grandparent
{
    parentMethod()
    {
        console.log("This is from Parent Method");
    }
}
class child extends Parent
{
    childMethod()
    {
        console.log("This is from Child Method");
    }
}
const obj= new child();
obj.parentMethod();
obj.grandparentMethod();
obj.childMethod();


//multilevel inheritance - assignment 