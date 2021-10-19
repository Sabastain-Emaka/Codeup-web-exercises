var p = 2;
while (p !==65537) {
    if(p % 2 == 0)
        console.log(p);
    p++;
}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
console.log(" I have these many cones to sell " + allCones)
do {
    var conesPurchase = Math.floor(Math.random() * 5) + 1;
    if(conesPurchase > allCones) {
        var outOfStocks = "cannot sell you" + conesPurchase + ". I space only have " + allCones
        console.log(outOfStocks)
    } else {
        allCones -= conesPurchase ;
        var soldCones = conesPurchase + " cones sold .... " + allCones + " cones to go"
        console.log(soldCones)
    }
} while(allCones > 0)

// This expression will generate a random number between 1 and 5
