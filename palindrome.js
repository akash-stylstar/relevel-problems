function checkPalindrome(string){
    let reverseString = string.split('').reverse().join('');
    if (reverseString === string){
        console.log("palindrome");
    }else{
            console.log("not palindrome");
    }
}
checkPalindrome("recacer");
checkPalindrome("123");
