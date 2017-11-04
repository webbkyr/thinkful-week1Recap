'use strict';

console.log('Hi, my name is Chris and I\'m 29 years old.');

//Wrap the statement in a function called whoAmI and call that function

// function whoAmI() {
//   console.log('Hi, my name is Chris and I\'m 29 years old.');
// }

// whoAmI();

//Change the hard coded string into a parameters, name and age

function whoAmI(name, age) {
  console.log(`Hi, my name is ${name} and I'm ${age} years old.`);
}

whoAmI('Kayla', 26);