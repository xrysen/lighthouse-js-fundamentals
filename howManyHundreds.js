const howManyHundreds = function(num) {
  let numOfHundreds = 0;
  let count = 1;
  while(count <= num) {
    if(count % 100 === 0) {
      numOfHundreds++;
    }
    count++;
  }

  return numOfHundreds;
}

console.log(howManyHundreds(894));


