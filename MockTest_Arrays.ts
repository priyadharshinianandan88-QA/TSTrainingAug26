//7. Count frequency of characters Input: let text = "automation"; Expected Output: a = 2 u = 1 t = 2
let text = "automation";
let processed: string[] = [];
for (let i = 0; i < text.length; i++) {
    if (processed.includes(text[i]!)) {
        continue;
    }
    let count = 0;
    for (let j = 0; j < text.length; j++) {
        if (text[i] === text[j]) {
            count++;
        }
    }
    console.log(text[i] + " = " + count);
    processed.push(text[i]!);
}

//8. Print star characters *, **, ***, ****, *****

let star:number=1;

function printStarPattern (stars: number):void
{
    for (star=1; star<=5 ; star++)
    {
        let row="";
         
        for (let star1=1; star1<=star; star1++)
        {
            row+="*";
        }
        console.log(row);
    }
}
printStarPattern(5);