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
  let strArray = message.split(' '); 
  for (let i=0; i < strArray.length; i++) {
    console.log(strArray[i][0]);

    if (strArray[i][0] === 'a') {
      result += strArray[i].charAt([1]);
    }
    else if (strArray[i][0] === 'b') {
      result += strArray[i].charAt([2]);
    }
    else if (strArray[i][0] === 'c') {
      result += strArray[i].charAt([3]);
    }
    else if (strArray[i][0] === 'd') {
      result += strArray[i][4]; 
    }
    else {
      result += '';
    }
  }
  return result;
}


console.log(decode(message));


