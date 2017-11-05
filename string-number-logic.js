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
    // console.log(strArray[i][0]);

    if (strArray[i][0] === 'a') {
      result += strArray[i].charAt([1]);
    }
    else if (strArray[i][0] === 'b') {
      result += strArray[i].charAt([2]);
    }
    else if (strArray[i][0] === 'c') {
      result += strArray[i][3];
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

//drill 4: days in a month

function daysInMonth(month) {
  switch(month) {
  case 'January':
    console.log('January has 31 days');
    break;
  case 'February':
    console.log('February has 28 days');
    break;
  case 'March':
    console.log('March has 31 days');
    break;
  case 'April':
    console.log('April has 30 days');
    break;
  case 'May':
    console.log('May has 31 days');
    break;
  case 'June':
    console.log('June has 30 days');
    break;
  case 'July':
    console.log('July has 31 days');
    break;
  case 'August':
    console.log('August has 31 days');
    break;
  case 'September':
    console.log('September has 30 days');
    break;
  case 'October':
    console.log('October has 31 days');
    break;
  case 'November':
    console.log('November has 30 days');
    break;
  case 'December':
    console.log('December has 31 days');
    break;

  }
}

daysInMonth('February');

//drill 5: rock paper scissors

function RockPaperScissors(userChoice){
  const computer = 1 + Math.floor((Math.random()*3));
  
}

console.log(RockPaperScissors(2));

console.log(Math.floor(Math.random()*3+1));