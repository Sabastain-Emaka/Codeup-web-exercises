"use strict";
(function () {
// A function is a block of reusable code that performs a specific task.
// Functions typically take in an input, and produce an output.

// Functions we have used so far :
// - prompt();
// -alert();
// -Number();
// -parseFloat();
// -parseInt();
// -toFixed();
// -toUpperCase();

// when executing a function, we call the name of the function, following

prompt("what is your name?"); // returns a string;

// Function Structure

function todaysDate(parameter1, parameter2, etc) {
    // // Do something
    // // return something
// }

    function todaysDate(greeting) {
        return greeting + Date();
    }

// Execute function

    var date = todaysDate("Today's date is: ");
    console.log(date);

// function delaration
    function echo(phrase) {
        return phrase + " " + phrase

    }

// console.log(echo("hello!"))
    console.log(echo(echo("hello")));

// (hello! hello!) - > echo('hello! hello!') -> hello! hello! hello! hello!

    var todaysDate = function (greeting) {
        return greeting + Date();
    }

// function expression / annonymous function
    var sayBye = function (name) {
        return 'Goodbye' + name;
    }

    console.log(sayBye('Jevian'));

// Example:
// create a function which takes in two
// number parameters to find the Hypotenuse angle

    function findHypotenuse(a, b) {
        var result;
        result = Math.sqrt((a * b) + (b * b))
        return result;

    }

// have a triangle with the sides of 4 and 5.
// Execute our function to find the hypotenuse

// arguments are the values
    console.log(findHypotenuse(4, 5));
    console.log(findHypotenuse(2, 8));
    console.log(findHypotenuse(3, 9));
    console.log(findHypotenuse(7, 6));

    function printFour() {
        return 'four';
    }

    console.log(printFour());

// Function Scope
// scope defines where a variable can be accessed

    console.log(global)

    function greeting() {
        var firstNmae = 'Hope';
        var lastName = 'Gift';
        return 'Hello, ' + firstName + lastNmae;
    }

    console.log(greeting());
    console.log(firstName, lastName);

// Immediately Invoked Function Expression (IIFE)


    // var ifyVar = 'I am local to the IIFE'
    // var info = 'hi'
    // function myFunction(){
    // }
}
    })();




