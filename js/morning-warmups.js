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


