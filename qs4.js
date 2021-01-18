let maxNum1 = Number(prompt("Enter here first number"));
let maxNum2 = Number(prompt("Enter here second number"));
let maxNum3 = Number(prompt("Enter here third number"));
let maxNum4 = Number(prompt("Enter here forth number"));
let maxNum5 = Number(prompt("Enter here fifth number"));
if ( maxNum1 > maxNum2 && maxNum1 > maxNum3 && maxNum1 > maxNum4 && maxNum1 > maxNum5 ) {
     alert ( maxNum1 );
} else if ( maxNum2 > maxNum1 && maxNum2 > maxNum3 && maxNum2 > maxNum4 && maxNum2 > maxNum5 ) {
     alert ( maxNum2 );
} else if ( maxNum3 > maxNum1 && maxNum3 > maxNum2 && maxNum3 > maxNum4 && maxNum3 > maxNum5 ) {
     alert ( maxNum3 );
} else if ( maxNum4 > maxNum1 && maxNum4 > maxNum2 && maxNum4 > maxNum3 && maxNum4 > maxNum5 ) {
     alert ( maxNum4 );
} else {
     alert ( maxNum5 );
}
