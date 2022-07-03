const isPrimeNumer = (number) =>{
    if (number === 1) return false;
    if (number === 2) return true;
     for (let i=2; i<number; i++){
        if (number % i === 0)return false;
     }
     return number;
};
const printPrimeNumberList = (fromNum, toNum) =>{
    if(printPrimeNumberList(fromNum) != null){
        console.log(primeNumber(fromNum));
    }
    fromNum++
    if (fromNum <= toNum){
        printPtimeNumberList(fromNum, toNum);
    }
};
printPrimeNumberList(7,97);