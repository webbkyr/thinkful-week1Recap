'use strict';
//drill 1: JediName 

function jediName(firstName, lastName) {
  return lastName.slice(0,3)+firstName.slice(0,2);  
}

// console.log(jediName('Beyonce', 'Knowles'));

//drill 2: toInfinity

function beyond(num) {
  switch(true) {
  case num === Infinity:
  case num === -Infinity:
    console.log('And beyond');
    break;
  case Number.isFinite(num) && num > 0 :
    console.log('To infinity');
    break;
  case Number.isFinite(num) && num < 0:
    console.log('To negative infinity');
    break;
  case num === 0:
    console.log('Staying home');
    break;    
  }
}

// beyond(Infinity);

// beyond(-Infinity);

// beyond(20);

// beyond(-20);

// beyond(0);

//drill 3: cracking the code

const message = 'craft block argon meter bells brown croon droop';

function decode(message){
  let result = '';
  //convert string into an array//
  message.split(' ');
  for (let i=0; i < message.length; i++) {
    if (message[i][0] === 'a') {
      result += message.charAt([2]);
    }
    if (message[i][0] === 'b') {
      result += message.charAt([3]);
    }
    if (message[i][0] === 'c') {
      result += message.charAt([4]);
    }
    if (message[i][0] === 'd') {
      result += message.charAt([5]); 
    }
    else {
      result += '';
    }
  }
  return result;

}

console.log(decode(message));

