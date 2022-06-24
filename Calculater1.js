function calculater (num1 , num2 , operator){
    if (operator === "+"){
        return num1 + num2;
    }
    if (operator === "-"){
        return num1 - num2;
    }
    if (operator === "*"){
        return num1 * num2;
    }
    if (operator ==="/"){
        return num1 / num2;
    }

}
let akash = calculater(3,4,"*");
console.log(akash);
