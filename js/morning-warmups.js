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

})();

function typeCheck(input) {
    if (typeof iput === 'String') {
        return "haha, it\'s a string of a string"
    } else {
        return typeof input;
    }

}
console.log('input is an empty string: ', type)

