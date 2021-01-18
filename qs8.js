let happyNumber = 0;
function happyNum(num) {
  let str = num.toString();
  let numList = [];
  let squreList = [];
  let newNum = 0;
  let loopCircle = [];
  for (let i = 0; i < str.length; i++) {
    numList.push(Number(str[i]));
}
  for (let i = 0; i < numList.length; i++) {
    squreList.push(numList[i] * numList[i]);
    newNum += (numList[i] * numList[i]);
}
  loopCircle.push(newNum);
  while (newNum !== 1) {
    str = newNum.toString();
    numList = [];
    squreList = [];
    newNum = 0;
    for (let i = 0; i < str.length; i++) {
      numList.push(Number(str[i]));
    }
    for (let i = 0; i < numList.length; i++) {
      squreList.push(numList[i] * numList[i]);
      newNum += (numList[i] * numList[i]);
    }
    if (loopCircle.includes(newNum)) {
      break;
    }
    loopCircle.push(newNum);
  }
  if (newNum === 1) {
    console.log(num);
    happyNumber++;
  }
}
for (let i = 1; i <= 1000; i++) {
  if (happyNumber >= 5) {
    break;
  }
  happyNum(i);
}
