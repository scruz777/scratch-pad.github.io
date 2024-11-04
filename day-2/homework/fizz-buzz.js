// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
     for (let i = 1; i <= 100; i++) { //use for loop to iterate from 1 to 100 
        if (i % 3 === 0 && i % 5 === 0) { //use remainder operator to determine if number is multiple of 3 and/or 5 if both multiple of three and five print "fizzbuzz'
            console.log("FizzBuzz");
        } else if (i % 3 === 0) { //for multiples of 3 print "fizz"
            console.log("Fizz");
        } else if (i % 5 === 0) { //for multiples of 5 print "buzz"
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
 // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}
