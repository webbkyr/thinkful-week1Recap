'use strict';
//JediName 

function jediName(firstName, lastName) {
  return lastName.slice(0,3)+firstName.slice(0,2);  
}

// console.log(jediName('Beyonce', 'Knowles'));

//toInfinity

function beyond(num) {
//   const infinPos = Infinity;
//   const infinNeg = -Infinity;
//   const finitePos = Number.isFinite(num);
//   const finiteNeg = Number.isFinite(-num);
//   const zero = 0;

  switch(true) {
  case num === Infinity:
  case num === -Infinity:
    console.log('And beyond');
    break;
  case Number.isFinite(num) && num != 0:
    console.log('To infinity');
    break;
  case Number.isFinite(-num) && num != 0:
    console.log('To negative infinity');
    break;
  case num === 0:
    console.log('Staying home');
    break;    
  }
}

beyond(Infinity);

beyond(-Infinity);

beyond(20);

beyond(-20);

beyond(0);