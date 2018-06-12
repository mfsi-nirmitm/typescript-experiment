interface NamePerson {
	firstName: string;
	age?: number;
	[propName: string]: any;
}

function greet(person:NamePerson) {
	console.log("Hello, "+ person.firstName);
}

function changeName(person:NamePerson) {
	person.firstName = "Anna";
}

const person = {
	firstName : "Max",
	hobbies:["Cooking","Sports"]
};

greet(person);
greet({firstName:"Max",age:27})
changeName(person);
greet(person);