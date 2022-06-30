const numArray = [234,34,12,111,18];
var minValue = numArray[0];
 const max = Math.max( ...numArray);

  console.log(max);
for (let i =0 ; i <= numArray.length-1; i++){
  //  console.log("TOP VALUE" , minValue , numArray[i]);

    if(numArray[i]< minValue){
//console.log(minValue , numArray[i]);
        minValue = numArray[i];
    }}
    console.log(minValue);
