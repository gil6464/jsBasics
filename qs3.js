let orderNum1= Number(prompt("Enter here first number"));
let orderNum2= Number(prompt("Enter here second number"));
let orderNum3= Number(prompt("Enter here third number"));
if (orderNum1>orderNum2 && orderNum2>orderNum3) {
     alert(orderNum1 + "," + orderNum2 + "," + orderNum3)
}else if(orderNum1>orderNum3 && orderNum3>orderNum2){
     alert(orderNum1 + "," + orderNum3 + "," + orderNum2)
}else if (orderNum2>orderNum1 && orderNum1>orderNum3){
     alert(orderNum2 + "," + orderNum1 + "," + orderNum3)
}else if(orderNum2>orderNum3 && orderNum3>orderNum1){
     alert(orderNum2 + "," + orderNum3 + "," + orderNum1)
}else if(orderNum3>orderNum1 && orderNum1>orderNum2){
     alert(orderNum3 + "," + orderNum1 + "," + orderNum2)
}else{
     alert(orderNum3 + "," + orderNum2 + "," + orderNum1)
}


