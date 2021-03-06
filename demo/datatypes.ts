// these are the datatypes in typescript

// number
let myAge: number = 27;
// myAge = 'Max'; //will give error

//boolean
let hasHobbies : boolean = false;
//  hasHobbies =1; // will give error

// assign typescript
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27'; // will give error

// array
let hobbies: any[] = ["cooking","Sports"];
hobbies = [100];
// hobbies = 100; // will give error

// tuples 
let address: [string, number] = ["Superstreet",99];
// address = [99,'superstreet']; // will give error

// enum
enum Color {
	Gray, // 0
	Red, // 1
	Green = 100, // 100
	Blue // 101
}
let myColor: Color = Color.Green;
console.log(myColor);

// any (try to avoid it's use)
let car: any = "BMW";
console.log(car);
car = {brand:"bmw",series:3};
console.log(car);

// functions
function returnMyName():string {
	return 'nirmit'; // return myAge; will give error
}
console.log(returnMyName());

// void
function sayHello(): void {
	console.log("Hello!");
}

// argument typescript
function multiply(value1: number, value2: number): number {
	return value1 * value2;
}
console.log(multiply(2,3));

// function types
let myMultiply: (val1:number,val2:number) => number;
//myMultiply = sayHello; // will give error
//myMultiply(); // will give error 
myMultiply = multiply;
console.log(myMultiply(2,3));

// objects
let userData : {name: string, age: number} = {
	name : 'Max',
	age : 27
};
/*userData = {
	a: "Hello",
	b: 22
}; */ // will give error

// complex object
let complex: {data: number[], output:(all: boolean) => number[]} = {
	data: [100, 3.99, 10],
	
	output: function (all:boolean): number[] {
		return this.data;
	}
};

// complex = {}; // will give error

// type alias
type Complex = {data: number[], output:(all:boolean) => number[] };

let complex2 : Complex = {
	data : [100,3.99,10],
	
	output: function (all: boolean) : number[] {
		return this.data;
	}
};

// union types
let myRealRealAge : number | string = 27;
myRealRealAge = "27";
//myRealRealAge = true; // will give error

// check types 
let  finalValue = "A string";
if (typeof finalValue  == "string" ) {
	console.log("final value is string");
}

// never 
function neverReturns(): never {
	throw new Error('An error!');
}

// Nullable Types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull = null; // type is null
// canAlsoBeNull =12; // will give error 

////////////////////////////////////////////

type BankAccount = { money:number, deposit: (val:number) => void };

let bankAccount : BankAccount = {
	money: 2000,
	deposit(value:number):void {
		this.money += value;
	}
};

let myself : {name: string, bankAccount: BankAccount, hobbies: string[]} = {
	name : "Max",
	bankAccount : bankAccount,
	hobbies : ["Sports","Cooking"] 
};

myself.bankAccount.deposit(300);

console.log(myself);

//////////////////////////

// Rest $ Spread
console.log("REST & SPREAD");
const numbers = [1,10,99,-5];
console.log(Math.max(33,99,10,-3));
console.log(Math.max(...numbers));

function makeArray(name: string, ...args: number[]){
	name = 'string';
	return args;
}
console.log(makeArray("Max",1,2,6));

// Destructuring
console.log("Destructuring");
const myHobbies = ["Cookies","Sports"];
const [hoby1,hoby2] = myHobbies;
console.log(hoby1,hoby2);

const userData1 = {userName: "Max", age:27};
const {userName: myName, age:myAge1} = userData1;
console.log(myName,myAge1);

// Template Literals
const userName = "Max";
const greeting = `This is a heading!
I'm ${userName}.
This is cool!`;
console.log(greeting);