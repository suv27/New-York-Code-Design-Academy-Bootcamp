
// WRITE A FUNcTION THAT HOLDS A FOR LOOP AND PRINTS ALL THE EVEN NUMBERS
// FROM 0 TO 1000 AND IF IS NOT EVEN IT WILL PRINT 'NOT EVEN'
function numbers() {
  var num = 1000;

  for (var i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(i);
    } else {
      console.log("NOT EVEN");
    }
  }
}

// FIRSTA STATEMENT
var second = 0;
while (second <= 1000) {
  console.log(second);
  second += 2;
}

// AN ARRAY 'CARS' THAT HOLDS TWO DIFFERENT ARRAYS INSIDE
var cars = [
  ["cangry", "porshe"],
  ["honda", "toyota"]
]

// AN OBJECT 'OBJ' THAT HOLDS DIFFERENT TYPES OF KEY-VALUES
var obj = {
  firstName: "starlyn",
  secondName: "Urena Ventura",
  age: 21,
  isCool: true,
  interests: ["gym", "coding", "eat"],
  friends: ["bob", "tina"],
  add: function(x, y) {
    return x + y;
  }
}

var object = {
  firstName: "starlyn",
  secondName: "Urena Ventura",
  age: 21,
  car: 'honda',
  interests: ["gym", "coding", "eat"],
  friends: ["bob", "tina"],
}

// A FUNCTION NAMED 'STRS' THAT HOLDS AN ARGUMENT STRING AND
// PRINTS THE STRING
function strS(str) {
  console.log(str);
}

// A FUNCTION THAT HAS NO ARGUMENT AND JUST PRINTS A STRING
function strS2() {
  console.log("NO ARGUMENTS");
}

// a function call door that checks out of 3 door which one is seleted
function door(doorNumber) {
  if (doorNumber === 1) {
    alert("FIRST DOOR SELECGED");
  } else if (doorNumber === 2) {
    alert("SECOND DOOR SELECTED");
  } else {
    alert("THIRD DOOR SELECTED");
  }
}

// PRINT AN ARRAY OF NAMES WITH A FOR LOOP //
var names = ["Jose", "Maria", "Pedro", "Victor"];
for (var i = 0; i <= names.length; i++) {
  console.log(names[i] + " is my friend");
}

// PRINTING 10 STARTS AND DECREASING THE AOUNT OF THEM
var star = "*";
for(var i = 10; i >= 0; i--){
	console.log(star.repeat(i));
}

// CREATING A PROMISE -> EXAMPLE: USING promiseInstance.then()

var Promise = require('promise');
var promise = new Promise(function (resolve, reject) {
	setTimeout(function() {
           resolve('hello world');
	}, 1000)

	promise.then(function(result) {
	   console.log(result);
	})


});

