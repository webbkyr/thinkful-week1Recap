'use strict';

console.log('Hi, my name is Chris and I\'m 29 years old.');

function yearOfBirth(age) {
  return 2017-age;
}

function whoAmI(name, age) {
  const yob = yearOfBirth(age);
  console.log(`Hi, my name is ${name} and I'm ${age} years old.`);
  console.log(`I was born in ${yob}`);
}

console.log(yearOfBirth(30));
whoAmI('Kayla', 26);

//Move the year of birth calculation into a new function.

