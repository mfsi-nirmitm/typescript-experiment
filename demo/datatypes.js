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
// functions
function returnMyName() {
    return 'nirmit'; // return myAge; will give error
}
console.log(returnMyName());
// void
function sayHello() {
    console.log("Hello!");
}
// argument typescript
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 3));
// function types
var myMultiply;
//myMultiply = sayHello; // will give error
//myMultiply(); // will give error 
myMultiply = multiply;
console.log(myMultiply(2, 3));
// objects
var userData = {
    name: 'Max',
    age: 27
};
/*userData = {
    a: "Hello",
    b: 22
}; */ // will give error
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27;
myRealRealAge = "27";
//myRealRealAge = true; // will give error
// check types 
var finalValue = "A string";
if (typeof finalValue == "string") {
    console.log("final value is string");
}
// never 
function neverReturns() {
    throw new Error('An error!');
}
// Nullable Types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull = null; // type is null
// canAlsoBeNull =12; // will give error 


