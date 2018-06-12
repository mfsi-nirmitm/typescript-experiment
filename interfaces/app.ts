interface NamePerson {
	firstName: string;
	age?: number;
	[propName: string]: any;
	greet(lastName:string):void;
}

function greet(person:NamePerson) {
	console.log("Hello, "+ person.firstName);
}

function changeName(person:NamePerson) {
	person.firstName = "Anna";
}

const person : NamePerson = {
	firstName : "Max",
	hobbies:["Cooking","Sports"],
	greet(lastName: string) {
		console.log("Hi, I am "+this.firstName+" "+lastName);
	}
};

greet(person);
//greet({firstName:"Max",age:27})
changeName(person);
greet(person);
person.greet("Anything");

class Person implements NamePerson {
	firstName: string;
	lastName: string;
	greet(lastName: string) {
		console.log("Hi, I am " + this.firstName+ " " + lastName);
	};
}

const myPerson = new Person();
myPerson.firstName = "Nirmit";
myPerson.lastName = "Maheshwari";
greet(myPerson);
myPerson.greet("Anything");

// Function Types

interface DoubleValueFunc {
	(number1:number, number2:number):number;
}

let myDoubleFunction : DoubleValueFunc;
myDoubleFunction = function (value1:number, value2:number) {
	return (value1+value2)*2;
};

console.log(myDoubleFunction(10,20));

// Interface Inheritance

interface AgedPerson extends NamePerson {
	age:number;
}

const oldPerson : AgedPerson = {
	age:27,
	firstName : "Max",
	greet(lastName: string) {
		console.log("Hello!");
	}
};

console.log(oldPerson);