let start = -40;
let end = 40;
let mass = [];
while (mass.length < 5)
{
    let num = Math.round(Math.random()*Math.abs(start-end) + Math.min(start,end));
    if (num%3 == 0) {mas = mass.push(num);}
}
console.log(mass)

let sum = 0;
let chet = 0;
let notChet =0;
let positiveNum = 0;
let negativeNum = 0;
for(i=0; i < mass.length; i++)
{
    sum += mass[i]
    if (mass[i]%2 != 1){chet +=1;}
    //else {notChet += 1 }
    if (mass[i]>0){positiveNum += 1}
    //else{negativeNum += 1}
    
}
console.log(`Суммавсех элементов массива = ${sum}`)
console.log(`Количество чётных элементов массива = ${chet}`)
//console.log(`Количество нечётных элементов массива = ${notChet}`)
console.log(`Количество положительных элементов массива = ${positiveNum}`)
//console.log(`Количество отрицательных элементов массива = ${negativeNum}`)

