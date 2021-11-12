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
     arr.push(remove);
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





    var wrestlers = [
        {
            name: "Bret Hart",
            nationality: "Canadian"
        }, {
            name: "Shawn Michaels",
            nationality: "American"
        }, {
            name: "Christian Cage",
            nationality: "Canadian"
        }, {
            name: "Keiji Mutoh",
            nationality: "Japanese"
        }, {
            name: "Eddy Guerrero",
            nationality: "American"
        }, {
            name: "Owen Hart",
            nationality: "Canadian"
        }
    ];


    function filterForCanadian(arr) {
        var bucket = [];
        arr.forEach(function(element) {
            if(element.nationality === 'Canadian') {
                bucket.push(element)
            }
        });
        return bucket;
    }
    console.log(filterForCanadian(wrestlers));


var circle = {
    radius:36
}
//
    var area = Math.round(Math.PI * (Math.pow(circle.radius, 2)));
    console.log(area);

    //
    var groceries = [
        {
            name: "carrots",
            quantity: 5
        },{
            name: "yams",
            quantity: 50
        },{
            name: "oranges",
            quantity: 9
        },{
            name: "onions",
            quantity: 2
        },{
            name: "cucumbers",
            quantity: 6
        },{
            name: "potatoes",
            quantity: 8
        }
    ];
    function getHighestQuantityObject(arr) {
        var obj = {
            name: "something",
            quantity: 0
        }
        arr.forEach(function(el) {
            if(el.quantity > obj.quantity) {
                obj = el;
            }
            console.log(obj);
        });
        return obj;
    }

    console.log(getHighestQuantityObject(groceries));

    // Write a function named ‘sortByName’ that takes in an array of objects,
    // and returns an array of objects in alphabetical order based on the name property.

    var products = [
        {
            name: 'Playstation 5',
            price: 599.99
        }, {
            name: 'Logitech Wireless Mouse',
            price: 23.99
        }, {
            name: 'Macbook Pro',
            price: 1099.99
        }, {
            name: 'GoPro HERO10',
            price: 399.99
        }, {
            name: '12" & 6" Metal Ruler Set',
            price: 5.99
        }]

    function sortByName(arr) {
        return arr.sort(function (a,b) {
            var alower=a.name.toLowerCase();
            var blower=b.name.toLowerCase();

            if(alower<blower) {
                return -1;
            } else if (alower > blower) {
            return 1
            } else {
                return 0
            }

        });

    }
    console.log(sortByName(products))

// Write a function in JavaScript that takes in an array of objects
// and returns the object with the lowest height property.
// Consider the following array to test your code.

    var bBallPlayers = [
        {
            name: "Hakeem Olajuwon",
            height: 213
        }, {
            name: "Muggsy Bogues",
            height: 160
        }, {
            name: "Chris Paul",
            height: 183
        }, {
            name: "Bol Bol",
            height: 218
        }, {
            name: "Moochie Norris",
            height: 185
        }, {
            name: "Manu Ginobili",
            height: 198
        }
    ];
function lowestProperty(arr) {
    var holdThis = {height: Number.MAX_VALUE};
    arr.forEach(function (el) {
        if(el.height < holdThis.height) {
            holdThis = el
        }
    });
    return holdThis;
}


console.log(lowestProperty(bBallPlayers))


    var myCharacter = {
        name: 'Jevian',
        hitPoints: 100,
        class: 'Warrior',
        abilities: {
            attack: function(obj) {
                console.log(myCharacter.name + " hit " + obj.name + " for " + myCharacter.weapon.damage + " damage! ")
                obj.hitPoints -= myCharacter.weapon.damage;
                console.log(obj.name + " has " + obj.hitPoints + " hit Points left! ")

            },
        },
        magicPoints: 0,
        weapon: {
            name: 'Silver Sabre',
            damage: 16,
            type: 'sword'
        }
    }

    var enemy = {
        name: 'Savage Orc',
        hitPoints: 100,
        class: 'Warrior',
        magicPoints: 0,
    }
    myCharacter.abilities.attack(enemy);
    myCharacter.abilities.attack(enemy);
    myCharacter.abilities.attack(enemy);
    myCharacter.abilities.attack(enemy);

    //write a function in JavaScript that takes in an array, and returns a random element from the array.

    function randomEl(arr){
        return arr[Math.floor(Math.random()*arr.length)];

        console.log(randomEl(arr["yam", "pepper","bitterleaf"]));

    }

})();



