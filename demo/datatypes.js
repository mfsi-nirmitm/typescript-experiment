"use strict";
// these are the datatypes in typescript
// number
var myAge = 27;
// myAge = 'Max'; //will give error
//boolean
var hasHobbies = false;
//  hasHobbies =1; // will give error
// assign typescript
var myRealAge;
myRealAge = 27;
// myRealAge = '27'; // will give error
// array
var hobbies = ["cooking", "Sports"];
hobbies = [100];
// hobbies = 100; // will give error
// tuples 
var address = ["Superstreet", 99];
// address = [99,'superstreet']; // will give error
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 101
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// any (try to avoid it's use)
var car = "BMW";
console.log(car);
car = { brand: "bmw", series: 3 };
console.log(car);
