let firstNumber = Number(prompt("Enter your first number:"));
let secondNumber = Number(prompt("Enter your second number:"));
let counter ;
if (firstNumber > secondNumber){
     counter = firstNumber;
}else{
     counter = secondNumber;
}
for( let i = counter; i > 1 ; i--){
     if(firstNumber % i === 0 && secondNumber % i ===0){
          alert(i);
          break;
     }     
}