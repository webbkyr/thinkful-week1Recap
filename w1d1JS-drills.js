'use strict';

// console.log('Hi, my name is Chris and I\'m 29 years old.');

function yearOfBirth(age) {
  return 2017-age;
}

function whoAmI(name, age) {
  const yob = yearOfBirth(age);
  try {
    let negativeAge = age < 0;
    let olderAge = age > 125;
    if (negativeAge) {
      throw new Error('Age cannot be negative');
    }
    if (olderAge) {
      throw new Error('Age is over 125');
    }
    if ((name !== typeof string) || (age !== typeof number)) {
      throw new Error('Argument not valid');
    }

  }
  catch (e){
    //using return will stop the function here; but console log with return the string//
    return `User error: ${e.message}`;
  }
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yob}.`;  
}

//function runs and an error message prints to the console.//
const berthaOver100 = whoAmI('Bertha', 126);
console.log(berthaOver100);

//assigning valid function to a variable and logging the output//
const kaylaW = whoAmI('Kayla', 26);

//typeof logic not working correctly here//
console.log(kaylaW);

// testing typeof logic
console.log(whoAmI('Kayla', '26'));
