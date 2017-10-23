(function() {

"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 *  > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name) {
    return "Hello, " + name + "!";
}

console.log(sayHello("codeup"));


/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */


var helloMessage = sayHello(name);

console.log(sayHello("Terry"));

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// var myName = "Terry"
//
// console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 *  > isTwo(1) // returns false
 *  > isTwo(2) // returns true
 *  > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

// var number = isTwo(random)
//
// function isTwo(number) {
//     if(number == 2) {
//         return "true"
//     } else {
//         return "false"
//     }
// }
//
// console.log(isTwo(random))

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Example:
 * > calculateTip(0.20, 20) // returns 4
 */



// function calculateTip(amount) {
//     var tipAmount = tipPercentage / 100
//     var bill = amount
//     var tip = bill * tipAmount
//     return "You're tip amount is $" + tip.toFixed(2);
// }
//
// var bill = 27.53
// var tip = bill * (tipPercentage/100)
//
// alert("Your bill is $27.53")
//
// var tipPercentage = prompt("What percentage would you like to add as a tip?")
//
// alert(calculateTip(27.53));
//
// alert("Your total bill is $" + bill + tip)

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

function returnTwo() {
    return 2
}
console.log(returnTwo());


function returnName() {
    return "Terry"
}

console.log(returnName());


function addThree(x) {
    return x + 3;
}

console.log(addThree(8));


function sayString(something) {
    return something;
}

console.log(sayString("Sequoia Rules!"))


function sayHowdy() {
    console.log("Howdy!");
}

sayHowdy("Howdy!");


function identity(input) {
    return input;
}

console.log(identity("codeup"));


function getRandomNumber(min, max) {
    var min = 1
    var max = 100
    var x = Math.floor((Math.random() * max) + min);
    return x
}

console.log(getRandomNumber(1, 100));


function first(input) {
    return "The first character in " + input + " is " + input.charAt(0);
}

console.log(first("thursday"));


function last(input) {
 return "The last character in " + input + " is " + input.slice(-1);
}

console.log(last("thursday"));


function rest(input) {
    return "The rest of the characters in " + input + " are " + input.substr(1, input.length-1);
}

console.log(rest("thursday"));


function reverseString(string) {
    var splitString = string.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

console.log(reverseString("thursday"));


function count(input) {
    return input.length;
}

console.log(count("thurssday"));


function add(a, b) {
    return a + b;
}

console.log(add(3, 5));


function subtract(a, b) {
    return a - b;
    }

console.log(subtract(6, 2));


function multiply(a, b) {
    return a * b;
    }

console.log(multiply(4, 5));


function divide(numerator, denominator) {
    return numerator / denominator;
}

console.log(divide(9, 3));


function remainder(number, divisor) {
    return number % divisor;
}

console.log(remainder(7, 2));


function square(a) {
    return a * a;
}

console.log(square(9));


function sumOfSquares(a, b) {
    var  squareOne = a * a;
    var  squareTwo = b * b;
    return add(squareOne), squareTwo;
}

console.log(sumOfSquares(4, 3));


function doMath(operator, a, b) {
    return operator(a, b);
    }

console.log(doMath(add(2, 3));






})();