/** TO-DO: Let's expand our previous isItANumber function. Now I want to also return string when we aren't passed a number. How do I refactor our function? */

function isItANumber(parameter) {
    if (typeof parameter === "number") {
        return "Hey. That's a number.";
    } else {
        return "Hey, you're not a number!";
    }
}
// function isItANumber(parameter) {
//     if (typeof parameter === "number") {
//         return "Hey. That's a number.";
//     } else {
//         return "Hey, you're not a number!";
//     }
// }

console.log(isItANumber(72));
console.log(isItANumber("Doug"));
@@ -86,58 +86,116 @@ console.log(isItANumber("Doug"));

// How would we write this as a if/else if/else code block?

var hasCow = true;
var hasGoat = true;

if (hasCow) {
    console.log("Miking Bessie");
} else if (hasGoat) {
    console.log("Milking Gertrude");
} else {
    console.log("Hey, I'm headed to Randall's for milk. You need anything?");
}


/** TO-DO: Let's make a function that takes in a number and will return three different strings for an
 * argument lesser than, greater than, or equal to 35. */

// function isThisThirtyFive(parameter) {
//
// }
function isThisThirtyFive(parameter) {
    if (parameter === -35) {
        return "Well aren't you clever. Yes, I suppose negative 35 is 35... in a way..."
    } else if (parameter > 35) {
        return "No. " + parameter + " is greater than 35."
    } else if (parameter < 35) {
        return "No. " + parameter + " is less than 35."
    } else {
        return "Yep, that sure is 35."
    }
}

console.log(isThisThirtyFive(34));
console.log(isThisThirtyFive(35));
console.log(isThisThirtyFive(36));
console.log(isThisThirtyFive(-35));


// TERNARY EXPRESSION: A expression to set a value based on boolean evaluation.

// TERNARY OPERATOR: A operation to set a value based on boolean evaluation.
// var message = (booleanValue) ? "Expression was true." : "Expression was false.";

// var message = (booleanValue) ? "Operation was true." : "Operation was false.";
/** Consider the following statement: "Are we out of milk? If we are out of milk: I'll head to the store, but if we
 * do have milk: I want to make a bowl of cereal." */

/** Consider the following statement: "Are we out of milk? If we are: I'll head to the store, but if we
 * do: I want to make a bowl of cereal." */
// How would we write this as a ternary expression?

// How would we write this as a ternary operator?
var doWeHaveMilk = false;

// var action = (doWeHaveMilk) ?
var action = (doWeHaveMilk) ? "Time to eat me some corn pops." : "Headed to Giant Eagle for milk. Need anything?";

/** TO-DO: Let's look back at the if/else version of our isItANumber function. Let's refactor our if/else as a ternary operator. */
console.log(action);

/** TO-DO: Let's look back at the if/else version of our isItANumber function. Let's refactor our if/else as a ternary expression. */

function isItANumber(parameter) {
    return (typeof parameter === "number") ? "Hey. That's a number." : "Hey, you're not a number!";
}

// SWITCH STATEMENT: A statement with multiple conditions that will trigger based on the value of a variable.

// var color = prompt("What is your favorite color?").toLowerCase();
//
// switch(color) {
//     case "green":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "orange":
//         alert("That's my brother's favorite color!");
//         break;
//     default:
//         alert(color + " is a weird color, my dude.");
//         break;
// }
var color = prompt("What is your favorite color?").toLowerCase();

switch(color) {
    case "blue":
    case "green":
        alert("What a coincidence, that's my favorite!");
        break;
    case "gray":
    case "grey":
        alert("Is it grey, or gray?");
        break;
    case "orange":
        alert("That's my brother's favorite color!");
        break;
    default:
        alert(color + " is a weird color, my dude.");
        break;
}

/** Consider the following sentence: "I don't have a cow, goat, or camel. I guess I'll have to go to the
 * store for milk." */

// How would we write this as a switch statement?

// var animal = ;
// switch (animal) {
//
// }
var animal = "skink";
switch (animal) {
    case "cow":
        console.log("Milking Bessie.");
        break;
    case "goat":
        console.log("Milking Gertrude.");
        break;
    case "camel":
        console.log("Milking Camille.");
        break;
    default:
        console.log("Headed to Kroger for milk, want anything?");
        break;
}

/** TO-DO: Let's make a switch statement with a prompt for the user to input their favorite sandwich meat. If they like 'olive loaf' we should return an alert to congratulate them on their bold choice, and if they choose 'brisket' we should return a different alert: this one for congratulating them on the 'right' answer. All other responses should trigger an alert stating apathy. */

var favoLunchMeat = prompt("What's our favorite lunch meat?");

switch (favoLunchMeat) {
    case "olive loaf":
        alert("You have a bolt palette; good for you.");
        break;
    case "brisket":
        alert("Ah, the correct choice.");
        break;
    default:
        alert("That's fine. Nothing wrong with a little " + favoLunchMeat);
        break;
}

// Let's work on the exercise!
