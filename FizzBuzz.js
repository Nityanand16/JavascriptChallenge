//In this we print all the numbers from 1 to N with a specific rule.
//If the number is divisible by 3 then print FIZZ.
//If the number is divisible by 5 then print BUZZ.
//If the number is divisible by both 3 and 5 then print FIZZBUZZ.

let inputNumber = (n) =>{
    for (let i = 0; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0){
        console.log("FIZZBUZZ");
        }
        else if(i % 5 == 0){
        console.log("BUZZ");
        }
        else if(i % 3 == 0){
        console.log("FIZZ");
        }
        else(console.log(i));
        
        
    }
}
inputNumber(40);
