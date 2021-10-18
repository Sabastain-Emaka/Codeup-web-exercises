"use strict"
function ShowMultiplicationTable(num) {
    for(var i =1; i <= 10; i++) {
        var ans = num * 1;
        console.log(num + "x" + i + "=" + ans);
    }
}
ShowMultiplicationTable(7);
for (var i =0; i<=10; i++);


var randomNber = Math.floor(Math.random() * 200) + 20;
if (randomNber % 2 ===0) {
    console.log("is an even num")
} else {
    console.log("is an odd num");
}

 for (var i =1; i < 10; i++) {
     console.log(i.toString().repeat(i));
 }

 for (var k = 100; k >= 5; k-=5) {
     console.log(k);
 }

