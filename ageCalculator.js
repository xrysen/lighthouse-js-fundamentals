const ageCalculator = function(name, yearOfBirth, currentYear) {

  return name + " is " + (currentYear - yearOfBirth) + " years old.";
}

console.log(ageCalculator("Steve", 1984, 2020));