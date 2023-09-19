'use strict';

function recursive (arr) {
  const integNumber = Math.round(Math.random() * 10);
  let newArr = [...arr, integNumber]
  console.log('число', integNumber);
  console.log('массив', newArr);

  const sumArr = newArr.reduce((acc, numb) => 
  acc +=numb , 0);

  console.log('sum', sumArr);

  if(sumArr >= 50) {
    return newArr;
  };

  return recursive(newArr);
}


console.log('Возвращаемый массив: ', recursive([]));