
var userNum = Number(prompt("enter an odd number between 1 and 50"))
for (var y = 1; y < 50; y++) {
    if (y === 1) {
        console.log('number to skip is ' + userNum)
    }

    if (y % 2 === 0 ) {
        continue;
    }
    if (y === userNum) {
        console.log('skipping number ' + userNum)
    } else {
        console.log('here is an odd number ' + y)
    }
}


