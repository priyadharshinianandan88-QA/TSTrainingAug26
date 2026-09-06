//forEach loop program

let marks: number[] = [85,90,95];
let totalMarks=0;

marks.forEach((marks) =>
{
  totalMarks=totalMarks + marks;
  })
    console.log(totalMarks);

//while loop program 

let age:number =28;
while (age<=30)
{
    console.log(age);
    age++;
}

//do while p
let year:number=2025;
do{
    console.log(year);
year++;
}
while(year<=2028);

//program with both number and boolean types conditions
/*
let attempt : number=1;
let success:boolean=false;
while (attempt<=3 && !success)
{
    console.log(`Attempt ${attempt}`);
    attempt++;
} */