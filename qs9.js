for (let i = 100; i < 1000; i++) {
  let string= i.toString();
  let cube = [];
  let sumOf = 0;
  for( let j = 0; j < string.length; j++) {
     cube.push(Number(string[j]) * Number (string[j]) * Number(string[j]));
  }
  for( let j = 0 ; j < 3 ; j++){
       sumOf += cube[j];
  } if ( i === sumOf){
    console.log(i);
  }  
}

