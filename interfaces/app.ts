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