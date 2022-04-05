let mass = []
let sum = 0
console.log(typeof NaN)
while(true){
    let num = prompt("Введи число")
        mass.push(num)
    if (num == null){
        for(let i =0; i< mass.length - 1; i++){
            if (Number(mass[i])){
                sum = sum + parseInt(mass[i])
                console.log(sum)
            }
        }
        break
    }
}
alert(sum)
