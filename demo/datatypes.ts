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