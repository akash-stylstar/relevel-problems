let numArray = [234,34,12,111,18];
let minValue = numArray[0];
for (let i =0 ; i <= numArray.length-1; i++){
    console.log("TOP VALUE" , minValue , numArray[i]);

    if(numArray[i]< minValue){
console.log(minValue , numArray[i]);
        minValue = numArray[i];
    }}
    console.log(minValue);
