// Exercise 1
var double = (value:number) => value * 2
console.log(double(10));

// Exercise 2
var greet = (name?: string) => {
    if (name === undefined) { name = "Max"; }
    console.log("Hello, " + name);
};
greet();
greet("Anna");

// Exercise 3 - Spread Operator
var numbers = [-3, 33, 38, 5];
console.log(Math.min( ...numbers));

// Exercise 4 - Spread Operator
var newArray = [55, 20];
newArray.push(...numbers);
console.log(newArray);

// Exercise 5 - Destructoring arrays
const testResults = [3.89, 2.99, 1.38];
const [result1,result2,result3] = testResults;
console.log(result1, result2, result3);

// Exercise 6
let scientist = {firstName: "Will", experience: 12};
let {firstName,experience} = scientist;
console.log(firstName, experience);