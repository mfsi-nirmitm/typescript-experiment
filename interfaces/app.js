function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Anna";
}
var person = {
    firstName: "Max",
    hobbies: ["Cooking", "Sports"],
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
greet(person);
//greet({firstName:"Max",age:27})
changeName(person);
greet(person);
person.greet("Anything");
//# sourceMappingURL=app.js.map