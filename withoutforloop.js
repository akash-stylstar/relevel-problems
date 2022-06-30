function callMeBack(num){
    console.log(num++);

    if(num == 10)return 0;
    else{
        callMeBack(num++);
    }
}
callMeBack(0);
for (let i =0; i<=10; i++){
    console.log(i);
}
