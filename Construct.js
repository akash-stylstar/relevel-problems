for(var i =1;i<=100;i++){
    if(i%3 ===0 && i%5 ===0 && i%15 ===0)
    {
        console.log(i + " akash ");
    }
    else if (i%3 ===0)
    {
        console.log(i+ "Relevel");
    }
    else if(i%5 ===0)
    {
        console.log(i+ "Buzz");
    }
    else if(i%15 ===0)
    {
        console.log(i+ "6indBuzz");
    }
    else
    {
        console.log(i);
    }
}