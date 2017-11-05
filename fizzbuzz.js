'use strict';

//Redo the "Fizz Buzz" drill" if you used if/else last time, then try switch statement this time.
// Hint: Remember, you use switch on a single result. 
// You only need to make one calculation and then set up cases for the possible results.

function fizzBuzz(countTo) {
//   16
  for (let i = 0; i < countTo; i++) {
    switch(countTo) {
    case i % 15 === 0:
      i = 'fizzbuzz';
      break;
    case i % 5 === 0:
      i = 'buzz';
      break;
    case i % 3 === 0:
      i = 'fizz';
      break;
    default:
      i;
    }
  }
  return countTo;
}
  
console.log(fizzBuzz(16));
  
  
  
/* From here down, you are not expected to 
     understand.... for now :)  
     
     
     Nothing to see here!
     
  */
  
  
  
// tests
(function testFizzBuzz() {
  // we'll use the variables in our test cases
  const countTo = 16;
  const expected = [
    1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz',
    'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16
  ];
  
  const actual = fizzBuzz(countTo) || [];
    
  if (
    expected.length === actual.length &&
      expected.every(function(item, index) {
        return actual[index] === item;}) ) {
      
    console.log('SUCCESS: fizzBuzz is working');
  }
  else {
    console.log('FAILURE: fizzBuzz is not working');
  }  
})();