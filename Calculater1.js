function calculator(num1, num2, operator){
    if(operator === "+"){
        return num1 + num2;
    }
    if(operator === "-"){
        return num1 - num2;
    }
    if(operator === "*"){
        return num1 * num2;
    }
    if(operator === "/"){
        return num1 / num2;
    }
}
let calculator1 = calculator(4,5,"+");
console.log(calculator1);
let calculator2 = calculator(3867,9347,"+");
console.log(calculator2);
let calculator3 = calculator(9,3,"/");
console.log(calculator3);
let calculator4 = calculator(3,9,"/");
console.log(calculator4);
let calculator5 = calculator(56,89,"*");
console.log(calculator5);
let calculator6 = calculator(-5,5,"-");
console.log(calculator6);
