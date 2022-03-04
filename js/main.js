let numbers = [ 3.02, 3.65, 5, -9, ];

let newArr = [];

function checkNumber(Numbers) {
  for (let num of numbers) {
    if(num < 0 ){
      newArr.push(Math.round(Math.abs(num ) ) );
    }else{
      newArr.push(Math.round(num ) );
    }
  }
  return newArr
}

console.log(checkNumber(numbers ) );