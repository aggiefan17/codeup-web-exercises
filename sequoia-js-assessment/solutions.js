"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

function isNegative (input) {
    return input < 0;
}

function average (input) {
    for (var i = 0; i < input.length; i += 1)
    var total = input.join("+");
    return total  / input.length;
}


function countOdds (input) {
            return 1;
}

function convertNameToObject (input) {
    var namesArray = input.split(" ");
    return {
        firstName: namesArray[0],
        lastName: namesArray[1]
    }

}

function fiveTo () {
return [];
}

function upperCaseLastNames (input) {
    return [];
}