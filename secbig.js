let sortArray = [45,45,45,45,45];
sortArray = sortArray.sort();
uniqueSortedArray = new Set(sortArray);
uniqueSortedArray =[...uniqueSortArray];
if(uniqueSortedArray.length === 1){
    console.log("NO SECAND VALUE FIND, LOL");
}else{
    console.log('secand heighest value is ${uniqueSortedArray.at(-2)}');
}
