(function() {

    function returnsSeven() {
        return 7;
    }

    console.log(returnsSeven());

    if (34 < 23 === false) {
        console.log("Am I Seen?");
    } else {
        console.log("What about me?");
    }

    var hadBreakfast = Boolean(Math.round(Math.random()));
    var hadBreakFastMessage = (hadBreakfast) ? "Boy howdy, that was a good breakfast." : "My Tummy rumbles"
    console.log(hadBreakfast);
    console.log(hadBreakFastMessage);



function typeCheck(input) {
    if (typeof iput === 'String') {
        return "haha, it\'s a string of a string"
    } else {
        return typeof input;
    }

}
console.log('input is an empty string: ',)

//FizzBuzz
 for (var l=1; l <=100; l++) {
     if (l % 15 ==0) {
         console.log('FizzBuzz');
     }
     else if (l % 3 == 0) {

         console.log('Fizz');
     }
     else if (l % 5 == 0) {

         console.log('Buzz');
     }
     else {
         console.log(l);
     }
 }

 function secondToLast(arr) {
     return arr[arr.length-2];
     console.log(secondToLast(arr['First', 'Second', 'Not last', 'Last']));
 }

 function moveToEnd(arr) {
     var remove = arr.shift();
     array.push(remove);
     return arr
 }
console.log(moveToEnd([1, 2, 3, 4]));
console.log(moveToEnd(['roll', 'rock', 'and']));

//
//Charmeleon
//An Animal
//Slow
//Changes color

var charmeleon = {
    name: 'charmeleon',
    description : " It changes colors",
    height: {
        feet : 13,
        inches: 4
    },
    type: ['land', 'water']
};








})();



