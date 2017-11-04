'use strict';

console.log('Hi, my name is Chris and I\'m 29 years old.');

function yearOfBirth(age) {
  return 2017-age;
}

function whoAmI(name, age) {
  const yob = yearOfBirth(age);
  try {
    yob;
    if (yob < 0 || yob > 125) {
      throw Error( 'invalid age');
    }
  }
  catch (Error){
    return 'Age cannot be negative or greater than 125';
  }
  console.log(`Hi, my name is ${name} and I'm ${age} years old.`);
  console.log(`I was born in ${yob}`);
}

console.log(yearOfBirth(30));
whoAmI('Kayla', -2);


