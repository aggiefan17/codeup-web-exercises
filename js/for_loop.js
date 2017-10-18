
// var numberInput = prompt("Please enter a number.");
//
// var number = parseFloat(numberInput);
//
// function showMultiplicationTable(input) {
//
//     for (var i = 1; i <= 10; i += 1) {
//         console.log(number + " x " + i + " = " + (number * i));
//     }
// }
// console.log(showMultiplicationTable(number));



// for (var i = 0; i < 10; i += 1) {
//     var random = Math.floor(Math.random() * 180) + 20;
//     if (random % 2 != 0) {
//         console.log(random + " is odd.");
//     } else {
//         console.log(random + " is even.");
//     }
// }



for (var i = 1; i <= 9; i += 1) {
    var numberString = i.toString();
    var output = numberString.repeat(i);
    }
    console.log(output);
}



// for (var i = 100; i > 0; i -= 5) {
//     console.log(i);
// }

// for (i = 1; i <= 100; i += 1) {
//     if (i % 15 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }