function num(){
    let num1 = prompt("Число 1")
    let num2 = prompt("Число 2")
    if(num1 != "null" && num2 !="null"){
        if(parseInt(num1) != "number" && parseInt(num2) !="number"){
            name(num1, num2)
        }
        
    }
    else{
        num1 = parseInt(prompt("Число 1"))
        num2 = parseInt(prompt("Число 2"))
        name(num1, num2)
    }
}


function name(num1, num2){
    if(parseInt(num1) > parseInt(num2)){
        alert(num1 + ">" + num2)
    }
    if(parseInt(num1) < parseInt(num2)){
        alert(num1 + "<" + num2)
    }
    else{
        alert(num1 + "=" + num2)
    }
}

num()

