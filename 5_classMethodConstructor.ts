class Student
{
    nameC: string;
    ageC: number;

constructor (name1:string, age1:number)
{
    this.nameC=name1;
    this.ageC=age1;
}
display ()
{
    console.log(this.nameC,this.ageC);
}
}
const student1=new Student ("Priya",35);
student1.display();