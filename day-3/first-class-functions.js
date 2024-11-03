// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) { //takes on one param of base
    // YOUR CODE BELOW HERE returns new function that takes param value and determines if value is greater than base
    return function(value) {
        return value > base;
    };
   // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 * 
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE returns func which takes value and determines if it is less than the base
    return function(value) {
        return value < base;
    };
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE convert startsWith to lowercase for case insenstivity sake using .toLowerCase() method
    var char = startsWith.toLowerCase();
    // Return a function that accepts a string and checks if it starts with var char
    return function(string {
     // Convert the first character of the input string to lowercase and compare
    return string[0].toLowerCase() === char;
    };
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    var x = endsWith.toLowerCae();
    //return a func which takes a string and checks if it ends with specified character
     return function (string) {
        // Convert the last character of the string to lowercase
        var char = string.slice(-1).toLowerCase();
        // Check if the last character matches the specified endsWith character
        return char === x;
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // Create storage array to hold the modified strings
    var storage = [];
    
    // use for loop to iterate over each string in the strings array
    for (let i = 0; i < strings.length; i++) {
        // Apply the modify function to the current string and push the result to modifiedStrings
        storage.push(modify(strings[i]));
    }
    
    // Return the array of modified strings
    return storage;
}
    // YOUR CODE ABOVE HERE //
}




/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // Iterate over each string in the `strings` array
    for (var i = 0; i < strings.length; i++) {
        // Apply the `test` function to the current string
        // If the test function returns false for any string
        if (!test(strings[i])) {
            // Return false immediately because one string did not pass the test
            return false;
        }
    }
    // If the loop completes and all strings passed the test
    // Return true, indicating that every string in the array passed the test
    return true;
}
    
    
    
    // YOUR CODE ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
